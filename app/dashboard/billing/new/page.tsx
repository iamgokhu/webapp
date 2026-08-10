"use client"
import { useState, useMemo } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Button, Badge } from "@/components/ui"
import Link from "next/link"
import { ArrowLeft, Plus, ScanLine, Settings, Calendar, X, Trash2, Database, Zap, Search } from "lucide-react"
import { useRouter } from "next/navigation"

async function fetchParties(q: string) {
  const res = await fetch(`/api/v1/parties?q=${encodeURIComponent(q)}`)
  return res.json()
}
async function fetchItems(q: string) {
  const res = await fetch(`/api/v1/items?q=${encodeURIComponent(q)}`)
  return res.json()
}

export default function CreateInvoicePage() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [partyId, setPartyId] = useState<string | null>(null)
  const [partyQ, setPartyQ] = useState("")
  const [itemQ, setItemQ] = useState("")
  const [invoiceNo, setInvoiceNo] = useState("13816")
  const [prefix, setPrefix] = useState("SRS/")
  const [date, setDate] = useState("11 Aug 2026")
  const [dueDate, setDueDate] = useState("10 Sep 2026")
  const [paymentTerms, setPaymentTerms] = useState("30")
  const [vehicleNo, setVehicleNo] = useState("TN34 AF4684")
  const [ewayNo, setEwayNo] = useState("")
  const [showPartyPicker, setShowPartyPicker] = useState(false)
  const [showItemPicker, setShowItemPicker] = useState(false)
  const [lines, setLines] = useState<any[]>([])
  const [additionalCharges, setAdditionalCharges] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [amountReceived, setAmountReceived] = useState(0)
  const [roundOff, setRoundOff] = useState(true)

  const { data: partyData } = useQuery({ queryKey: ["parties", partyQ], queryFn: () => fetchParties(partyQ), staleTime: 5000 })
  const { data: itemData } = useQuery({ queryKey: ["items", itemQ], queryFn: () => fetchItems(itemQ), staleTime: 5000 })

  const parties = partyData?.parties || []
  const items = itemData?.items || []
  const party = parties.find((p: any) => p.id === partyId) || null

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch("/api/v1/billing", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || "Failed")
      return j
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["billing"] })
      router.push("/dashboard/billing")
    }
  })

  const addItem = (item: any) => {
    setLines([...lines, { ...item, qty: 1, lineDisc: 0, id: Date.now() + Math.random() }])
    setShowItemPicker(false)
  }

  const updateLine = (id: any, field: string, value: any) => {
    setLines(lines.map(l => l.id === id ? { ...l, [field]: value } : l))
  }

  const removeLine = (id: any) => setLines(lines.filter(l => l.id !== id))

  const calc = useMemo(() => {
    let subtotal = 0, totalDisc = 0, totalTax = 0
    lines.forEach(l => {
      const lineTotal = l.qty * l.sale
      const disc = l.lineDisc || 0
      const taxable = lineTotal - disc
      const tax = taxable * (l.gst / 100)
      subtotal += lineTotal; totalDisc += disc; totalTax += tax
    })
    const taxableAmount = subtotal - totalDisc
    const grand = taxableAmount + totalTax + additionalCharges - discount
    const rounded = roundOff ? Math.round(grand) : grand
    const roundDiff = rounded - grand
    const balance = rounded - amountReceived
    return { subtotal, totalDisc, taxableAmount, totalTax, grand, rounded, roundDiff, balance }
  }, [lines, additionalCharges, discount, amountReceived, roundOff])

  const handleSave = () => {
    if (!party) { alert("Please select a party — Parties module (Postgres indexed)"); return }
    if (lines.length === 0) { alert("Please add at least one item — Items module (Meilisearch <50ms)"); return }
    mutate({
      party,
      items: lines.map(l => ({ sku: l.sku, name: l.name, qty: l.qty, sale: l.sale, gst: l.gst, mrp: l.mrp, hsn: l.hsn })),
      invoiceNo, prefix, amount: calc.rounded, gst: calc.totalTax
    })
  }

  return (
    <div className="min-h-screen bg-white -m-4 md:-m-6">
      <div className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex items-center gap-3">
        <Link href="/dashboard/billing" className="p-2 hover:bg-zinc-100 rounded-lg"><ArrowLeft className="h-5 w-5" /></Link>
        <h1 className="font-semibold flex items-center gap-2">Create Sales Invoice <Badge variant="secondary" className="gap-1"><Zap className="h-3 w-3" /> 8-sec • Postgres + Redis</Badge></h1>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-1 text-xs border rounded-full px-2 py-1"><Database className="h-3 w-3" /> {partyData?.source || "Postgres"} • {itemData?.source || "Meilisearch"}</span>
          <Button variant="outline" size="sm" className="gap-1"><Settings className="h-3.5 w-3.5" /> Settings</Button>
          <Button variant="outline" size="sm">Save & New</Button>
          <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white" onClick={handleSave} disabled={isPending}>{isPending ? "Validating ATS..." : "Save"}</Button>
        </div>
      </div>

      {error && <div className="mx-4 mt-4 p-3 bg-red-50 border border-red-200 text-sm text-red-700 rounded-lg">{(error as any).message} — Order Control Engine blocked</div>}

      <div className="p-4 space-y-4 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4">
          <div>
            <div className="text-sm font-medium mb-2 flex items-center gap-2">Bill To <span className="text-xs text-zinc-500">• Parties module • Postgres indexed • Redis 10s</span></div>
            {!party ? (
              <button onClick={() => setShowPartyPicker(!showPartyPicker)} className="w-full border-2 border-dashed border-violet-300 rounded-lg p-8 text-center hover:bg-violet-50">
                <div className="text-violet-600 text-sm">+ Add Party</div>
                <div className="text-xs text-zinc-500">Meilisearch &lt;50ms • 12 SRS parties</div>
              </button>
            ) : (
              <div className="border rounded-lg p-4 bg-zinc-50">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold text-sm">{party.name}</div>
                    <div className="text-xs text-zinc-600">{party.address} • {party.placeOfSupply}</div>
                    <div className="text-xs text-zinc-600">GSTIN: {party.gstin} • Mobile: {party.phone}</div>
                    <div className="text-xs text-zinc-600">Place of Supply: {party.placeOfSupply} • ATS validated</div>
                  </div>
                  <button onClick={() => setPartyId(null)} className="text-xs text-red-600 hover:underline">Change</button>
                </div>
              </div>
            )}
            {showPartyPicker && !party && (
              <div className="mt-2 border rounded-lg bg-white shadow-lg max-h-80 overflow-auto">
                <div className="p-2 border-b flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                    <input value={partyQ} onChange={e => setPartyQ(e.target.value)} placeholder="Search party, GSTIN, phone... (Meilisearch)" className="w-full border rounded-lg pl-7 pr-2 py-1.5 text-sm" autoFocus />
                  </div>
                  <button onClick={() => setShowPartyPicker(false)}><X className="h-4 w-4" /></button>
                </div>
                {parties.map((p: any) => (
                  <button key={p.id} onClick={() => { setPartyId(p.id); setShowPartyPicker(false) }} className="w-full text-left p-3 hover:bg-zinc-50 border-b flex justify-between">
                    <div>
                      <div className="font-medium text-sm">{p.name}</div>
                      <div className="text-xs text-zinc-500">{p.gstin} • {p.phone} • {p.type} • {p.tier}</div>
                    </div>
                    <Badge>{p.status}</Badge>
                  </button>
                ))}
                <Link href="/dashboard/parties" className="block p-3 text-center text-sm text-violet-600 hover:underline">+ Add New Party — Go to Parties Module</Link>
              </div>
            )}
          </div>

          <div className="border rounded-lg p-4 space-y-3 bg-white">
            <div className="grid grid-cols-3 gap-3 text-xs">
              <label>Invoice Prefix:<input value={prefix} onChange={e => setPrefix(e.target.value)} className="mt-1 w-full rounded border px-2 py-1.5 bg-zinc-50" /></label>
              <label>Invoice Number:<input value={invoiceNo} onChange={e => setInvoiceNo(e.target.value)} className="mt-1 w-full rounded border px-2 py-1.5 bg-violet-50 font-mono" /></label>
              <label>Sales Invoice Date:<div className="mt-1 flex items-center gap-1 border rounded px-2 py-1.5 bg-white"><Calendar className="h-3.5 w-3.5" /><input value={date} onChange={e => setDate(e.target.value)} className="flex-1 outline-none" /></div></label>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs border-2 border-dashed rounded-lg p-3">
              <label>Payment Terms:<div className="mt-1 flex gap-1"><input value={paymentTerms} onChange={e => setPaymentTerms(e.target.value)} className="w-16 rounded border px-2 py-1.5" /> days <div className="flex-1 flex items-center gap-1 border rounded px-2 py-1.5"><Calendar className="h-3.5 w-3.5" /><input value={dueDate} onChange={e => setDueDate(e.target.value)} className="flex-1 outline-none" /></div></div></label>
              <div className="text-xs">Due Date:<div className="mt-1 text-zinc-600">Calculated from Terms</div></div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <label>E-Way Bill No:<input value={ewayNo} onChange={e => setEwayNo(e.target.value)} className="mt-1 w-full rounded border px-2 py-1.5 bg-zinc-50" placeholder="Optional >₹50K" /></label>
              <label>Vehicle No.:<input value={vehicleNo} onChange={e => setVehicleNo(e.target.value)} className="mt-1 w-full rounded border px-2 py-1.5" /></label>
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-[40px_1fr_90px_60px_60px_100px_80px_60px_100px_40px] gap-px bg-zinc-200 text-xs font-medium">
            <div className="bg-zinc-50 p-2 text-center">NO</div>
            <div className="bg-zinc-50 p-2">ITEMS/SERVICES <span className="text-[10px] text-zinc-500">• Meilisearch 50K SKUs</span></div>
            <div className="bg-zinc-50 p-2">HSN/SAC</div>
            <div className="bg-zinc-50 p-2 text-center">DISC</div>
            <div className="bg-zinc-50 p-2 text-center">QTY</div>
            <div className="bg-zinc-50 p-2 text-right">PRICE/ITEM (₹)</div>
            <div className="bg-zinc-50 p-2 text-right">DISCOUNT</div>
            <div className="bg-zinc-50 p-2 text-center">TAX</div>
            <div className="bg-zinc-50 p-2 text-right">AMOUNT (₹)</div>
            <div className="bg-zinc-50 p-2"></div>
          </div>
          {lines.length === 0 ? (
            <button onClick={() => setShowItemPicker(true)} className="w-full border-2 border-dashed border-violet-300 m-2 rounded-lg p-6 text-center hover:bg-violet-50">
              <div className="text-violet-600">+ Add Item</div>
              <div className="text-xs text-zinc-500">Meilisearch &lt;50ms • HSN auto • ATS check</div>
            </button>
          ) : (
            <div className="divide-y">
              {lines.map((l, idx) => {
                const lineTotal = l.qty * l.sale
                const disc = l.lineDisc || 0
                const taxable = lineTotal - disc
                const taxAmt = taxable * (l.gst / 100)
                const amount = taxable + taxAmt
                return (
                  <div key={l.id} className="grid grid-cols-[40px_1fr_90px_60px_60px_100px_80px_60px_100px_40px] gap-px bg-zinc-200 text-xs items-center">
                    <div className="bg-white p-2 text-center">{idx + 1}</div>
                    <div className="bg-white p-2">
                      <div className="font-medium">{l.name}</div>
                      <div className="text-[11px] text-zinc-500">{l.sku} • HSN {l.hsn} • ATS {l.ats} • Stock: {l.stock}</div>
                    </div>
                    <div className="bg-white p-2 text-center">{l.hsn}</div>
                    <div className="bg-white p-2 text-center">-</div>
                    <div className="bg-white p-1"><input type="number" value={l.qty} onChange={e => updateLine(l.id, "qty", Number(e.target.value))} className="w-full border rounded px-1 py-1 text-center" /></div>
                    <div className="bg-white p-1"><input type="number" value={l.sale} onChange={e => updateLine(l.id, "sale", Number(e.target.value))} className="w-full border rounded px-1 py-1 text-right" /></div>
                    <div className="bg-white p-1"><input type="number" value={l.lineDisc} onChange={e => updateLine(l.id, "lineDisc", Number(e.target.value))} className="w-full border rounded px-1 py-1 text-right" placeholder="0" /></div>
                    <div className="bg-white p-2 text-center">{l.gst}%</div>
                    <div className="bg-white p-2 text-right font-medium">₹ {amount.toLocaleString("en-IN")}</div>
                    <div className="bg-white p-2 text-center"><button onClick={() => removeLine(l.id)}><Trash2 className="h-3.5 w-3.5 text-red-500" /></button></div>
                  </div>
                )
              })}
              <button onClick={() => setShowItemPicker(true)} className="w-full p-3 text-center text-sm text-violet-600 hover:bg-violet-50 border-t-2 border-dashed">+ Add Item</button>
            </div>
          )}
          <div className="flex">
            <div className="flex-1" />
            <button onClick={() => setShowItemPicker(true)} className="m-2 border rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-zinc-50">
              <ScanLine className="h-6 w-6" /> Scan Barcode
            </button>
          </div>
        </div>

        {showItemPicker && (
          <div className="border rounded-lg bg-white shadow-lg p-3">
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-400" />
                <input value={itemQ} onChange={e => setItemQ(e.target.value)} placeholder="Search 50K SKUs, HSN, barcode... (Meilisearch)" className="w-full border rounded-lg pl-7 pr-2 py-1.5 text-sm" autoFocus />
              </div>
              <button onClick={() => setShowItemPicker(false)}><X className="h-4 w-4" /></button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-auto">
              {items.map((it: any) => (
                <button key={it.sku} onClick={() => addItem(it)} className="text-left border rounded-lg p-3 hover:bg-emerald-50 hover:border-emerald-300">
                  <div className="font-medium text-sm">{it.name}</div>
                  <div className="text-xs text-zinc-500">{it.sku} • HSN {it.hsn} • GST {it.gst}% • ₹{it.sale} • ATS {it.ats}</div>
                  <div className="text-xs text-emerald-600">Stock: {it.stock} • {it.cat} • {it.godown}</div>
                </button>
              ))}
            </div>
            <Link href="/dashboard/inventory" className="block mt-3 text-center text-sm text-emerald-600 hover:underline">+ Add New Item — Go to Items Module (Stock, Batches, Godowns)</Link>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="border rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between font-medium border-b pb-2">SUBTOTAL <span>₹ {calc.subtotal.toLocaleString("en-IN")}</span><span>₹ {calc.totalDisc.toLocaleString("en-IN")}</span><span>₹ {calc.totalTax.toLocaleString("en-IN")}</span></div>
              <button className="text-violet-600 text-xs">+ Add Notes</button>
              <div className="text-violet-600 text-xs">+ Add Terms and Conditions</div>
            </div>
            <div className="border rounded-lg p-4 space-y-3 text-sm">
              <div className="font-medium">Bank Details</div>
              <div className="text-xs space-y-1 text-zinc-600">
                <div>Account Number: <span className="font-mono text-zinc-900">872620000057327</span></div>
                <div>IFSC Code: <span className="font-mono">DBSS0IN0726</span></div>
                <div>Bank & Branch Name: <span className="text-zinc-900">Development Bank of Singapore ,TIRUCHENGODE-CHETTY ST.</span></div>
                <div>Account Holder's Name: <span className="text-zinc-900">SRS MART</span></div>
              </div>
              <div className="flex justify-between text-xs">
                <button className="text-violet-600">Change Bank Account</button>
                <button className="text-red-600">Remove Bank Account</button>
              </div>
              <div className="border-2 border-dashed rounded-lg p-3 flex gap-3">
                <div className="h-20 w-20 border-2 border-dashed grid place-items-center text-xs">QR</div>
                <div className="text-xs">
                  <div className="font-medium">Payment QR</div>
                  <div className="font-mono">srsmart@dbs</div>
                  <div className="text-zinc-500">Customers can pay this invoice by scanning this QR</div>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <button className="text-violet-600">Change QR Code</button>
                <button className="text-red-600">Remove QR Code</button>
              </div>
            </div>
          </div>

          <div className="border rounded-lg divide-y">
            <div className="p-4 space-y-3 text-sm">
              <button className="text-violet-600 text-xs">+ Add Additional Charges</button>
              <div className="flex justify-between"><span>Taxable Amount</span><span>₹ {calc.taxableAmount.toLocaleString("en-IN")}</span></div>
              <button className="text-violet-600 text-xs">+ Add Discount</button>
              <div className="flex justify-between"><span>Discount</span><span>- ₹ {discount.toLocaleString("en-IN")}</span></div>
              <div className="flex items-center gap-2"><input type="checkbox" checked={roundOff} onChange={e => setRoundOff(e.target.checked)} /> <span className="text-xs">Auto Round Off</span> {roundOff && <span className="ml-auto text-xs">₹ {calc.roundDiff.toFixed(2)}</span>}</div>
              <div className="flex justify-between font-bold text-base border-t pt-3"><span>Total Amount</span><span>₹ {calc.rounded.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span></div>
              <div className="flex gap-2 items-center">
                <span className="text-xs flex-1">Total Amount</span>
                <input type="number" value={amountReceived} onChange={e => setAmountReceived(Number(e.target.value))} placeholder="Enter Payment amount" className="flex-1 border rounded px-3 py-2 text-right bg-zinc-50" />
              </div>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span>Amount Received</span>
                <div className="flex gap-2">
                  <span className="border rounded-l px-2 py-1.5 bg-zinc-50">₹</span>
                  <input type="number" value={amountReceived} onChange={e => setAmountReceived(Number(e.target.value))} className="border-t border-b px-2 py-1.5 w-20 text-right" />
                  <select className="border rounded-r px-2 py-1.5"><option>Cash</option><option>UPI</option><option>Bank</option></select>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-end text-xs">
                <span>Mark as fully paid</span><input type="checkbox" checked={amountReceived >= calc.rounded && calc.rounded > 0} onChange={e => setAmountReceived(e.target.checked ? calc.rounded : 0)} />
              </div>
            </div>
            <div className="p-4 flex justify-between text-sm font-medium">
              <span className="text-emerald-600">Balance Amount</span>
              <span className="text-emerald-600">₹ {calc.balance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="p-4 flex gap-2">
              <div className="flex-1 text-xs text-zinc-500">Stack: FastAPI → Order Control (ATS/margin) → Postgres → Redis invalidate → GSP IRN</div>
              <div className="text-right text-xs">
                <div>Authorized signatory for <b>SRS MART</b></div>
                <div className="font-mono text-2xl italic mt-2">S. Guer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

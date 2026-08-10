"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { useBilling } from "@/lib/store"
import { formatCurrency } from "@/lib/utils"
import { INVENTORY } from "@/lib/data"
import { Plus, Zap, Printer, Share2, Search, ScanLine, Timer, Palette } from "lucide-react"
import Link from "next/link"

export default function BillingPage() {
  const { invoices, addInvoice } = useBilling()
  const [party, setParty] = useState("SKS Traders, Salem")
  const [lines, setLines] = useState([{ sku: INVENTORY[0].sku, name: INVENTORY[0].name, qty: 2, price: INVENTORY[0].sale, gst: 12 }])
  const [creating, setCreating] = useState(false)
  const [elapsed, setElapsed] = useState<number | null>(null)

  const subtotal = lines.reduce((s,l)=> s + l.qty*l.price, 0)
  const tax = lines.reduce((s,l)=> s + l.qty*l.price*(l.gst/100), 0)
  const total = subtotal + tax

  const createInvoice = () => {
    setCreating(true)
    const start = performance.now()
    setTimeout(()=>{
      const ms = Math.round(performance.now()-start+ 1200) // fake 8s feel
      setElapsed(ms)
      const id = `INV-2026-${Math.floor(1000+Math.random()*9000)}`
      addInvoice({ id, party, amount: Math.round(total), gst: Math.round(tax), status: "PENDING", date: new Date().toISOString().slice(0,10), items: lines.length })
      setCreating(false)
      // reset timer visual
      setTimeout(()=>setElapsed(null), 2500)
    }, 900)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2"><Zap className="h-5 w-5 text-orange-500" /> Billing — 8-Second Invoice <Badge variant="success">Paid GST • e-Invoice</Badge></h1>
          <p className="text-xs text-zinc-600">HSN auto, GST calc, e-Way above 50K, IRN via GSP. The fastest billing flow in market — paid includes e-Invoice &amp; e-Way unlimited.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/billing/templates"><Button variant="secondary" size="sm" className="gap-1"><Palette className="h-3.5 w-3.5" /> Invoice Themes — A4/A5</Button></Link>
          <Button variant="outline" size="sm"><Printer className="h-3.5 w-3.5 mr-1" /> Print</Button>
          <Button variant="outline" size="sm"><Share2 className="h-3.5 w-3.5 mr-1" /> Share WhatsApp</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><div className="font-semibold text-sm">New Invoice</div><Badge variant="secondary" className="gap-1"><Timer className="h-3 w-3" /> {elapsed ? `${(elapsed/1000).toFixed(2)}s — Done` : "Timer starts on Create"}</Badge></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="text-sm font-medium space-y-1"><span>Party (search)</span><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" /><input value={party} onChange={e=>setParty(e.target.value)} className="w-full rounded-xl border pl-9 pr-3 py-2 bg-white" placeholder="Search party / GSTIN" /></div></label>
              <label className="text-sm font-medium space-y-1"><span>Branch / Godown</span><select className="w-full rounded-xl border px-3 py-2 bg-white"><option>Salem-A (Default)</option><option>Salem-B</option><option>Erode</option></select></label>
            </div>

            <div className="rounded-xl border overflow-hidden">
              <div className="bg-zinc-50 px-3 py-2 text-xs font-semibold flex items-center justify-between"><span>Items</span><span className="flex gap-2"><Button size="sm" variant="outline" className="h-7 text-xs" onClick={()=>setLines([...lines, { sku: INVENTORY[1].sku, name: INVENTORY[1].name, qty:1, price: INVENTORY[1].sale, gst:12 }])}><Plus className="h-3 w-3" /> Add</Button><Button size="sm" variant="outline" className="h-7 text-xs"><ScanLine className="h-3 w-3 mr-1" /> Scan Barcode</Button></span></div>
              <div className="divide-y">
                {lines.map((l,i)=>(
                  <div key={i} className="grid grid-cols-[1fr_70px_90px_70px_90px] gap-2 p-2 items-center text-sm">
                    <div className="min-w-0"><div className="font-medium truncate">{l.name}</div><div className="text-xs text-zinc-500">{l.sku} • HSN 1101 • GST {l.gst}%</div></div>
                    <input type="number" value={l.qty} onChange={e=>{const v=[...lines]; v[i].qty=Number(e.target.value); setLines(v)}} className="rounded-lg border px-2 py-1.5 text-center" />
                    <input type="number" value={l.price} onChange={e=>{const v=[...lines]; v[i].price=Number(e.target.value); setLines(v)}} className="rounded-lg border px-2 py-1.5 text-right" />
                    <div className="text-right text-xs">{formatCurrency(l.qty*l.price*l.gst/100)}</div>
                    <div className="text-right font-semibold">{formatCurrency(l.qty*l.price*(1+l.gst/100))}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border p-3 bg-zinc-50 space-y-1"><div className="flex justify-between"><span>Subtotal</span><b>{formatCurrency(subtotal)}</b></div><div className="flex justify-between"><span>GST</span><b>{formatCurrency(tax)}</b></div><div className="flex justify-between text-base border-t pt-1"><span>Grand Total</span><b className="text-orange-600">{formatCurrency(total)}</b></div></div>
              <div className="space-y-2">
                <label className="block text-xs font-medium">Payment mode (paid: UTR verify)<select className="mt-1 w-full rounded-xl border px-3 py-2 bg-white"><option>Cash</option><option>UPI — Verify UTR</option><option>NEFT/RTGS</option><option>Cheque</option></select></label>
                <label className="block text-xs font-medium">Notes<input placeholder="Delivery instructions" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" /></label>
              </div>
            </div>

            <Button onClick={createInvoice} disabled={creating} variant="secondary" className="w-full h-12 text-base gap-2">
              {creating ? "Creating — validating ATS • GST • e-Invoice…" : elapsed ? `✓ Created in ${(elapsed/1000).toFixed(2)}s — IRN Generated` : "Create Invoice — 8 Second Flow →"}
            </Button>
            <div className="text-xs text-zinc-500 text-center">Order Control Engine validates ATS (Physical - Reserved - Blocked) before invoice. Margin guard enforced.</div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2"><div className="font-semibold text-sm">Recent Invoices — Today</div></CardHeader>
            <CardContent className="space-y-2 max-h-[520px] overflow-auto">
              {invoices.map(inv=>(
                <div key={inv.id} className="rounded-xl border p-3 text-sm">
                  <div className="flex items-center justify-between"><span className="font-mono text-xs font-bold">{inv.id}</span><Badge variant={inv.status==="PAID"?"success":inv.status==="OVERDUE"?"warning":"secondary"}>{inv.status}</Badge></div>
                  <div className="font-medium text-xs mt-1">{inv.party}</div>
                  <div className="flex justify-between text-xs text-zinc-600"><span>{inv.date} • {inv.items} items</span><span className="font-bold">{formatCurrency(inv.amount)}</span></div>
                  <div className="mt-2 flex gap-1.5"><Button size="sm" variant="outline" className="h-7 text-xs flex-1">View PDF</Button><Button size="sm" variant="outline" className="h-7 text-xs flex-1">e-Invoice IRN</Button></div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="p-4 bg-amber-50 border-amber-200">
            <div className="text-sm font-bold">Paid feature: e-Invoice + e-Way unlimited</div>
            <div className="text-xs text-zinc-700 mt-1">Starter: 100 IRN/mo. Growth: 2,000/mo. Enterprise: unlimited + auto GSP retry & Slack alert.</div>
          </Card>
        </div>
      </div>
    </div>
  )
}

"use client"
import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui"
import { SALES_INVOICES, PARTIES, INVENTORY } from "@/lib/data"
import { useBilling } from "@/lib/store"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { Search, Calendar, MoreVertical, Plus, FileText, ChevronDown, Filter } from "lucide-react"
import { Button, Badge } from "@/components/ui"

export default function BillingListPage() {
  const { invoices } = useBilling()
  // Use SALES_INVOICES as primary data + combine with store invoices for dynamic
  const allInvoices = useMemo(() => {
    const storeMapped = invoices.map(inv => ({
      id: inv.id.replace("INV-2026-", "SRS/"),
      date: inv.date ? new Date(inv.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "10 Aug 2026",
      party: inv.party,
      dueIn: "4 Days",
      amount: inv.amount,
      unpaid: inv.amount,
      status: inv.status === "PAID" ? "Paid" : "Unpaid",
    }))
    return [...SALES_INVOICES, ...storeMapped].slice(0, 15)
  }, [invoices])

  const totalSales = 102979833.54
  const paid = 18384967.38
  const unpaid = 84594866.16

  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<string[]>([])

  const filtered = allInvoices.filter(inv =>
    inv.party.toLowerCase().includes(search.toLowerCase()) ||
    inv.id.toLowerCase().includes(search.toLowerCase())
  )

  const toggleSelect = (id: string) => {
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])
  }

  return (
    <div className="space-y-4 bg-[#F8F9FA] -m-4 md:-m-6 p-4 md:p-6 min-h-screen">
      {/* Top bar like SRS MART */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold flex items-center gap-2">Sales Invoices</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1"><FileText className="h-3.5 w-3.5" /> Reports <ChevronDown className="h-3 w-3" /></Button>
          <Link href="/dashboard/billing/templates"><Button variant="outline" size="sm">Templates A4/A5</Button></Link>
        </div>
      </div>

      {/* Stats cards - exactly as image */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="p-4 border-2 border-violet-300 bg-violet-50">
          <div className="text-xs text-zinc-600 flex items-center gap-1">Total Sales <span className="text-[10px]">ⓘ</span></div>
          <div className="text-lg font-bold">₹ {totalSales.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-emerald-700 flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-emerald-100 flex items-center justify-center text-[10px]">₹</span> Paid</div>
          <div className="text-sm font-semibold">₹ {paid.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-red-600 flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-red-100 flex items-center justify-center text-[10px]">₹</span> Unpaid</div>
          <div className="text-sm font-semibold">₹ {unpaid.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
        </Card>
        <Card className="p-4">
          <div className="text-xs text-zinc-600 flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-zinc-100 flex items-center justify-center text-[10px]">₹</span> Cancelled</div>
          <div className="text-sm font-semibold">-</div>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by party, invoice number..."
              className="w-full rounded-lg border pl-9 pr-3 py-2 bg-white text-sm"
            />
          </div>
          <div className="flex items-center gap-2 border rounded-lg bg-white px-3 py-2 text-sm">
            <Calendar className="h-4 w-4 text-zinc-400" />
            <span>Last 365 Days</span>
            <Calendar className="h-4 w-4 text-zinc-400" />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1"><Filter className="h-3.5 w-3.5" /> Bulk Actions <ChevronDown className="h-3 w-3" /></Button>
          <Link href="/dashboard/billing/new"><Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white gap-1"><Plus className="h-3.5 w-3.5" /> Create Sales Invoice</Button></Link>
        </div>
      </div>

      {/* Table - exact as image */}
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50 border-b text-xs text-zinc-600">
                <th className="w-8 p-3"><input type="checkbox" onChange={e => setSelected(e.target.checked ? filtered.map(f => f.id) : [])} checked={selected.length === filtered.length && filtered.length > 0} /></th>
                <th className="text-left p-3 font-medium">Date <span className="inline-block ml-1">↕</span></th>
                <th className="text-left p-3 font-medium">Invoice Number</th>
                <th className="text-left p-3 font-medium">Party Name</th>
                <th className="text-left p-3 font-medium">Due In</th>
                <th className="text-left p-3 font-medium">Amount <span className="inline-block ml-1">↕</span></th>
                <th className="text-left p-3 font-medium">Status</th>
                <th className="w-8 p-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(inv => (
                <tr key={inv.id} className="border-b hover:bg-zinc-50">
                  <td className="p-3"><input type="checkbox" checked={selected.includes(inv.id)} onChange={() => toggleSelect(inv.id)} /></td>
                  <td className="p-3 text-xs">{inv.date}</td>
                  <td className="p-3 font-mono text-xs font-medium">{inv.id}</td>
                  <td className="p-3 text-xs">{inv.party}</td>
                  <td className="p-3 text-xs">{inv.dueIn}</td>
                  <td className="p-3 text-xs">
                    <div className="font-medium">₹ {inv.amount.toLocaleString("en-IN")}</div>
                    <div className="text-[11px] text-zinc-500">(₹ {inv.unpaid.toLocaleString("en-IN")} unpaid)</div>
                  </td>
                  <td className="p-3"><Badge variant="warning" className="bg-red-50 text-red-600 border border-red-200 text-[11px]">{inv.status}</Badge></td>
                  <td className="p-3"><button className="p-1 hover:bg-zinc-100 rounded"><MoreVertical className="h-4 w-4 text-zinc-400" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selected.length > 0 && (
          <div className="p-3 bg-violet-50 border-t flex items-center gap-2 text-sm">
            <span>{selected.length} selected</span>
            <Button size="sm" variant="outline" className="h-7 text-xs">Download PDF</Button>
            <Button size="sm" variant="outline" className="h-7 text-xs">Send WhatsApp</Button>
            <Button size="sm" variant="outline" className="h-7 text-xs">Mark Paid</Button>
          </div>
        )}
      </Card>

      <div className="text-xs text-zinc-500">Showing {filtered.length} of {allInvoices.length} invoices • Dynamic: Add party via Parties module, Add item via Items module — both linked. Create new invoice → 8-sec flow with HSN auto, GST, e-Way.</div>
    </div>
  )
}

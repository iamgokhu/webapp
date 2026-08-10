"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { formatCurrency } from "@/lib/utils"

const ORDERS = [
  { id: "ORD-8821", party: "SKS Traders", channel: "Salesman", items: 8, total: 24750, status: "CONFIRMED", ats: "Reserved" },
  { id: "ORD-8822", party: "Ramesh Kirana", channel: "WhatsApp AI", items: 3, total: 4200, status: "VALIDATING", ats: "Checking" },
  { id: "ORD-8823", party: "Best Supermarket", channel: "B2C Web", items: 12, total: 54200, status: "BLOCKED", ats: "Low ATS — Tata Tea" },
  { id: "ORD-8824", party: "Murugan Wholesale", channel: "B2B", items: 22, total: 89300, status: "BILLING_PENDING", ats: "Approved" },
]

export default function OrdersPage(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold text-white">Order Control Engine — Central Validation</h1>
        <Badge variant="secondary">ATS = Physical - Reserved - Blocked - Safety • Hierarchical blocking</Badge>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        {[
          { k: "Today", v: "483" },
          { k: "Confirmed", v: "412" },
          { k: "Blocked (ATS/Margin)", v: "18" },
          { k: "Avg Confirm", v: "1.4 sec" },
        ].map(c=>(<Card key={c.k} className="p-4 text-center"><div className="text-xs text-zinc-400">{c.k}</div><div className="text-xl font-bold">{c.v}</div></Card>))}
      </div>
      <Card>
        <CardHeader className="pb-2"><div className="font-semibold text-sm">All Channels — Single Authority</div><div className="text-xs text-zinc-400">Customer, Salesman, Sales AI, Phone AI all validated here. No bypass.</div></CardHeader>
        <CardContent className="space-y-2">
          {ORDERS.map(o=>(
            <div key={o.id} className="rounded-xl border p-3 flex flex-wrap items-center gap-3 text-sm">
              <div className="font-mono text-xs font-bold">{o.id}</div>
              <div className="flex-1 min-w-[140px]"><div className="font-medium">{o.party}</div><div className="text-xs text-zinc-400">{o.channel} • {o.items} items • {formatCurrency(o.total)}</div></div>
              <Badge variant={o.status==="CONFIRMED"?"success": o.status==="BLOCKED"?"warning":"secondary"}>{o.status}</Badge>
              <div className="text-xs">ATS: <b>{o.ats}</b></div>
              <Button size="sm" variant="outline" className="h-7 text-xs">Audit</Button>
              <Button size="sm" className="h-7 text-xs">Convert to Invoice</Button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card className="p-4 bg-zinc-900 text-white text-sm">
        <div className="font-bold">Paid — Next-Day Bulk Billing (Growth+)</div>
        <div className="opacity-70">Select route → generate all invoices in one click. Respects ATS, blocking, margin guard, branch stock. Paid customers billed 312 invoices in 4 min yesterday.</div>
        <Button variant="secondary" size="sm" className="mt-3">Run Bulk Billing — Salem Route 04</Button>
      </Card>
    </div>
  )
}

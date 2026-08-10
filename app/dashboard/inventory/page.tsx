"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { INVENTORY } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import { Search, AlertTriangle, ScanLine, ArrowUpDown, Package } from "lucide-react"
import { useState } from "react"

export default function InventoryPage() {
  const [q, setQ] = useState("")
  const filtered = INVENTORY.filter(i=> i.name.toLowerCase().includes(q.toLowerCase()) || i.sku.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2"><Package className="h-5 w-5" /> Inventory — Multi-Godown <Badge>Paid: Batch & Expiry + FEFO</Badge></h1>
          <p className="text-xs text-zinc-600">ATS = Physical - Reserved - Blocked - Damaged. Scan, adjust, transfer. Low-stock alerts via WhatsApp.</p>
        </div>
        <div className="flex gap-2"><Button size="sm" variant="outline"><ScanLine className="h-3.5 w-3.5 mr-1" /> Scan</Button><Button size="sm" variant="secondary">+ Add Stock</Button></div>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" /><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search SKU, name, barcode, HSN…" className="w-full rounded-xl border pl-9 pr-3 py-2 bg-white" /></div>
          <div className="flex gap-2 text-xs">
            <Badge variant="secondary">Godowns: Salem-A • Salem-B • Erode</Badge>
            <Badge variant="outline"><ArrowUpDown className="h-3 w-3 mr-1" /> Sort: Low ATS</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map(item=>(
          <Card key={item.sku} className={item.ats<100?"border-amber-300 bg-amber-50/40":""}>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div><div className="font-semibold text-sm leading-none">{item.name}</div><div className="text-xs text-zinc-500">{item.sku} • {item.cat} • {item.godown}</div></div>
              {item.ats<100 && <Badge variant="warning" className="gap-1"><AlertTriangle className="h-3 w-3" /> Low</Badge>}
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="rounded-xl border bg-white p-2"><div className="font-bold">{item.stock}</div><div className="text-zinc-500">Physical</div></div>
                <div className="rounded-xl border bg-white p-2"><div className="font-bold">{item.ats}</div><div className="text-emerald-600">ATS</div></div>
                <div className="rounded-xl border bg-white p-2"><div className="font-bold">{item.blocked}</div><div className="text-zinc-500">Blocked</div></div>
                <div className="rounded-xl border bg-white p-2"><div className="font-bold text-emerald-600">{formatCurrency(item.sale)}</div><div className="text-zinc-500">Sale</div></div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Move</Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Adjust</Button>
                <Button size="sm" className="flex-1 h-8 text-xs">Order</Button>
              </div>
              <div className="text-xs text-zinc-500">MRP {formatCurrency(item.mrp)} • Purchase {formatCurrency(Math.round(item.sale*0.82))} • Margin {(100*(item.sale - Math.round(item.sale*0.82))/item.sale).toFixed(1)}%</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

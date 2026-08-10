"use client"
import { Card, CardContent, Badge, Button } from "@/components/ui"
import { PARTIES } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import { Users, Search, BadgeCheck, Clock, Phone } from "lucide-react"
import { useState } from "react"

export default function PartiesPage(){
  const [q,setQ]=useState("")
  const filtered = PARTIES.filter(p=>p.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="text-xl font-bold flex items-center gap-2"><Users className="h-5 w-5" /> Parties — Customers & Retailers</h1>
        <Button size="sm" variant="secondary">+ Add Party</Button>
      </div>
      <div className="relative max-w-xl"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" /><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search party, phone, GSTIN…" className="w-full rounded-xl border pl-9 pr-3 py-2 bg-white" /></div>
      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(p=>(
          <Card key={p.name}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div><div className="font-semibold text-sm">{p.name}</div><div className="text-xs text-zinc-500">{p.type} • Tier: {p.tier} • GST: 33XXXXX0001</div></div>
                <Badge variant={p.status==="Approved"?"success":"warning"} className="gap-1">{p.status==="Approved"?<BadgeCheck className="h-3 w-3" />:<Clock className="h-3 w-3" />}{p.status}</Badge>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-xl border p-2 bg-zinc-50"><div className="text-zinc-500">Balance</div><div className="font-bold">{formatCurrency(p.balance)}</div></div>
                <div className="rounded-xl border p-2 bg-zinc-50"><div className="text-zinc-500">Credit Limit</div><div className="font-bold">{formatCurrency(p.credit)}</div></div>
                <div className="rounded-xl border p-2 bg-white"><div className="text-zinc-500">Util.</div><div className="font-bold">{Math.round(p.balance/p.credit*100)}%</div></div>
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs"><Phone className="h-3 w-3 mr-1" /> Call</Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Ledger</Button>
                <Button size="sm" className="flex-1 h-8 text-xs">Create Bill</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="p-4 bg-blue-50 border-blue-200 text-sm"><span className="font-semibold">Paid — B2B Approval Workflow:</span> GST + shop photo + field verification. Bronze→Diamond tiers auto-upgrade on volume. Growth+ includes credit & scheme engine.</Card>
    </div>
  )
}

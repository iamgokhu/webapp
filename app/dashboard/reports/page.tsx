"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "GSTR-1", v: 342000 },
  { name: "GSTR-3B", v: 298000 },
  { name: "Stock Val", v: 2840000 },
  { name: "Aging 0-30", v: 420000 },
  { name: "Aging 30+", v: 422000 },
]

export default function ReportsPage(){
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-xl font-bold">Reports & GST — 25+ Standard</h1>
        <div className="flex gap-2"><Button size="sm" variant="outline">Auto-email to CA</Button><Button size="sm" variant="secondary">Export GSTR JSON</Button></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm">Snapshot</div></CardHeader><CardContent className="h-[220px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><XAxis dataKey="name" tick={{fontSize:10}} interval={0} /><YAxis tick={{fontSize:11}} /><Tooltip /><Bar dataKey="v" fill="#f97316" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer></CardContent></Card>
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Available Reports (Paid — all unlocked in Enterprise)</div></CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-2 text-sm">
            {["Sales Register", "Purchase Register", "GST GSTR-1/2/3B", "Stock Ledger", "Party Ledger", "Trial Balance", "P&L", "Cash Flow", "Aging (Party-wise)", "Stock Valuation — FIFO/Wtd Avg", "Branch-wise Sales", "Salesman Performance"].map(r=>(
              <div key={r} className="rounded-xl border px-3 py-2 bg-white flex justify-between"><span className="text-xs font-medium">{r}</span><Badge variant="secondary" className="text-[10px]">PDF + Excel</Badge></div>
            ))}
          </CardContent>
        </Card>
      </div>
      <Card className="p-4 text-sm">
        <div className="font-semibold">Compliance Status — Paid</div>
        <div className="mt-2 grid sm:grid-cols-3 gap-2 text-xs">
          <div className="rounded-xl border p-3">GST: GSP ClearTax • IRN auto <Badge variant="success" className="ml-2">Ready</Badge></div>
          <div className="rounded-xl border p-3">DPDP Act 2023: PII redaction ON</div>
          <div className="rounded-xl border p-3">Backups: pg_dump + WAL → S3 (cross-region)</div>
        </div>
      </Card>
    </div>
  )
}

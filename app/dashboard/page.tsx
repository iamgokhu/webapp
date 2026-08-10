"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { formatCurrency } from "@/lib/utils"
import { AGENTS, DELIVERIES, INVENTORY } from "@/lib/data"
import Link from "next/link"
import { ArrowUpRight, AlertTriangle, CheckCircle2, Clock, ShieldAlert, IndianRupee, Package, Truck, Users, Zap, TrendingUp, Activity, Cpu, FileText } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const revenue = [
  { d: "04 Aug", v: 320000 },
  { d: "05 Aug", v: 410000 },
  { d: "06 Aug", v: 380000 },
  { d: "07 Aug", v: 520000 },
  { d: "08 Aug", v: 482000 },
  { d: "09 Aug", v: 610000 },
  { d: "10 Aug", v: 482450 },
]
const channel = [
  { name: "Salesman", v: 210 },
  { name: "B2C Web", v: 98 },
  { name: "WhatsApp AI", v: 124 },
  { name: "Phone AI", v: 31 },
  { name: "B2B", v: 20 },
]

export default function CommandCenter() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Super Admin Command Center</h1>
          <p className="text-sm text-zinc-600">Paid — Enterprise • Single owner controls all 35 modules, 20 agents, 5 branches. Everything auditable.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/billing"><Button size="sm" variant="secondary" className="gap-1"><Zap className="h-3.5 w-3.5" /> New Invoice — 8 sec</Button></Link>
          <Link href="/dashboard/reports"><Button size="sm" variant="outline">GSTR Export</Button></Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { k: "Today Revenue", v: formatCurrency(482450), sub: "+12.4% vs yesterday", icon: IndianRupee, ok: true },
          { k: "Pending Collections", v: formatCurrency(842000), sub: "47 invoices overdue", icon: Clock, ok: false },
          { k: "Stock Value", v: formatCurrency(2840000), sub: "4,212 SKUs • 3 low", icon: Package, ok: true },
          { k: "Risk — Fraud Blocked", v: "23 attempts", sub: "₹0 loss • AI guard", icon: ShieldAlert, ok: true },
        ].map(c => (
          <Card key={c.k} className="relative overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold tracking-widest text-zinc-500">{c.k}</div>
                <c.icon className={`h-4 w-4 ${c.ok ? "text-emerald-500" : "text-amber-500"}`} />
              </div>
              <div className="mt-1 text-xl font-bold">{c.v}</div>
              <div className={`text-xs ${c.ok ? "text-emerald-600" : "text-amber-600"}`}>{c.sub}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between"><div className="font-semibold text-sm">Revenue — Last 7 Days</div><Badge variant="secondary">Paid analytics • P50/P95</Badge></CardHeader>
          <CardContent className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenue}><XAxis dataKey="d" tick={{fontSize:11}} /><YAxis tick={{fontSize:11}} tickFormatter={v=>`₹${(v/1000).toFixed(0)}k`} /><Tooltip formatter={(v:any)=>formatCurrency(v as number)} /><Area type="monotone" dataKey="v" stroke="#f97316" fill="#fff7ed" strokeWidth={2} /></AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Orders by Channel — Today</div><div className="text-xs text-zinc-500">483 orders • Central validation: Order Control Engine</div></CardHeader>
          <CardContent className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channel}><XAxis dataKey="name" tick={{fontSize:10}} interval={0} angle={-10} dy={10} height={40} /><YAxis tick={{fontSize:11}} /><Tooltip /><Bar dataKey="v" fill="#18181b" radius={[6,6,0,0]} /></BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><span className="font-semibold text-sm">Commercial Control Center</span><Badge variant="secondary">Owner only</Badge></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between rounded-xl border px-3 py-2"><span>Billing globally</span><span className="font-bold text-emerald-600">● ON</span></div>
            <div className="flex items-center justify-between rounded-xl border px-3 py-2"><span>Orders — All channels</span><span className="font-bold text-emerald-600">● ON</span></div>
            <div className="flex items-center justify-between rounded-xl border px-3 py-2 bg-amber-50 border-amber-200"><span>Phone AI intake</span><Badge variant="warning">PAUSED</Badge></div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border px-3 py-2 flex justify-between"><span>Min margin</span><b>12%</b></div>
              <div className="rounded-xl border px-3 py-2 flex justify-between"><span>Price spike alert</span><b>&gt; 8%</b></div>
            </div>
            <div className="text-xs text-zinc-500">Toggles apply instantly via Order Control Engine (hierarchical blocking: Global → Category → SKU → Channel).</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><span className="font-semibold text-sm">Exception Alert Center</span><Badge variant="warning">3 new</Badge></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {[
              { t: "GPS spoof flagged", d: "Salesman Suresh • mock location • 10:21 AM", sev: "high" },
              { t: "UTR duplicate attempt", d: "₹12,400 • INV-1841 • blocked", sev: "high" },
              { t: "Low stock", d: "Tata Tea 500g — ATS 45 (Erode)", sev: "med" },
              { t: "Cash mismatch", d: "Trip TRIP-042 • ₹120 short", sev: "med" },
            ].map(a => (
              <div key={a.t} className="flex gap-3 rounded-xl border px-3 py-2 bg-white">
                <AlertTriangle className={`h-4 w-4 mt-0.5 ${a.sev==="high"?"text-red-500":"text-amber-500"}`} />
                <div className="flex-1"><div className="font-medium leading-none text-xs">{a.t}</div><div className="text-xs text-zinc-500">{a.d}</div></div>
              </div>
            ))}
            <Link href="/dashboard/field" className="text-xs underline">View all 11 alerts →</Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><span className="font-semibold text-sm">Approval Queue</span><Badge>4 pending</Badge></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {[
              { t: "Credit Note — ₹2,840", d: "SKS Traders • damaged 12 pcs", by: "Branch Admin — Salem" },
              { t: "Replacement — 6 pcs", d: "Parle-G 800g • expiry swap", by: "Branch Admin — Erode" },
              { t: "Price override 14%", d: "Fortune Oil • below margin", by: "Salesman — Kumar" },
            ].map(a => (
              <div key={a.t} className="rounded-xl border px-3 py-2">
                <div className="font-medium text-xs">{a.t}</div><div className="text-xs text-zinc-500">{a.d} • {a.by}</div>
                <div className="mt-1.5 flex gap-2"><Button size="sm" className="h-7 text-xs">Approve</Button><Button size="sm" variant="outline" className="h-7 text-xs">Reject</Button></div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><span className="font-semibold text-sm flex items-center gap-1"><Cpu className="h-4 w-4 text-emerald-600" /> AI Agent Budgets — Today</span><Badge variant="outline">Auto-pause on overrun</Badge></CardHeader>
          <CardContent className="space-y-2">
            {AGENTS.slice(0,4).map(a=>(
              <div key={a.name} className="flex items-center gap-3 text-sm border rounded-xl px-3 py-2">
                <div className="flex-1"><div className="font-medium text-xs">{a.name}</div><div className="text-xs text-zinc-500">₹{a.cost} / ₹{a.budget} • {a.jobs} jobs</div><div className="mt-1 h-1.5 rounded-full bg-zinc-100 overflow-hidden"><div className="h-full bg-emerald-600" style={{width: `${Math.min(100, (a.cost/a.budget)*100)}%`}} /></div></div>
                <Badge variant={a.status==="Running"?"success":"secondary"}>{a.status}</Badge>
              </div>
            ))}
            <Link href="/dashboard/agents" className="text-xs underline">Manage all 8 agents →</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between"><span className="font-semibold text-sm flex items-center gap-1"><Truck className="h-4 w-4" /> Live Deliveries</span><Badge variant="secondary">3 trips</Badge></CardHeader>
          <CardContent className="space-y-2">
            {DELIVERIES.map(d=>(
              <div key={d.id} className="rounded-xl border px-3 py-2 text-sm flex items-center justify-between">
                <div><div className="font-medium text-xs">{d.id} • {d.driver} • {d.orders} orders</div><div className="text-xs text-zinc-500">{d.route}</div></div>
                <Badge variant={d.status==="Delivered"?"success": d.status==="In Transit"?"warning":"secondary"}>{d.status}</Badge>
              </div>
            ))}
            <div className="flex gap-2 text-xs"><span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> OTP verified POD</span><span className="inline-flex items-center gap-1"><Activity className="h-3.5 w-3.5 text-emerald-600" /> GPS live</span></div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Package className="h-4 w-4" /> Inventory Health</div></CardHeader><CardContent className="space-y-1 text-sm">{INVENTORY.slice(0,3).map(i=>(<div key={i.sku} className="flex justify-between border rounded-lg px-3 py-2 text-xs"><span>{i.name}</span><span className={i.ats<50?"text-red-600 font-bold":"text-zinc-600"}>ATS {i.ats}</span></div>))}<Link href="/dashboard/inventory" className="text-xs underline">Full stock + ATS →</Link></CardContent></Card>
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm">System Health — Paid SLA</div></CardHeader><CardContent className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-xl border p-3 text-center"><div className="font-bold">99.92%</div><div className="text-zinc-500">Uptime 30d</div></div>
          <div className="rounded-xl border p-3 text-center"><div className="font-bold">184 ms</div><div className="text-zinc-500">API p95</div></div>
          <div className="rounded-xl border p-3 text-center"><div className="font-bold">0</div><div className="text-zinc-500">DLQ events</div></div>
          <div className="rounded-xl border p-3 text-center"><div className="font-bold">12 min</div><div className="text-zinc-500">Backup age</div></div>
        </CardContent></Card>
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-1"><FileText className="h-4 w-4" /> Audit & Compliance</div></CardHeader><CardContent className="space-y-2 text-xs">
          <div className="flex justify-between border rounded-lg px-3 py-2"><span>Audit logs (24h)</span><b>2,842</b></div>
          <div className="flex justify-between border rounded-lg px-3 py-2"><span>GST: GSTR-1 ready</span><Badge variant="success">Yes</Badge></div>
          <div className="flex justify-between border rounded-lg px-3 py-2"><span>DPDP: PII redaction</span><Badge variant="success">ON</Badge></div>
          <Link href="/dashboard/reports" className="underline">Open audit viewer →</Link>
        </CardContent></Card>
      </div>
    </div>
  )
}

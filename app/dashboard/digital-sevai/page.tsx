"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { DIGITAL_SEVAI } from "@/lib/data"
import { Building2, FileText, Shield, Wallet, Globe, CheckCircle2, Clock, TrendingUp } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

export default function DigitalSevaiPage() {
  const totalRev = DIGITAL_SEVAI.reduce((s, x) => s + x.revenue, 0)
  const totalReq = DIGITAL_SEVAI.reduce((s, x) => s + x.requests, 0)
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2"><Building2 className="h-5 w-5 text-emerald-600" /> Digital Sevai — Govt & Finance Services <Badge variant="success">Enabled • 8 Services</Badge></h1>
          <p className="text-xs text-zinc-600">PAN, Passport, Aadhaar, Certificates, Bill Pay, Insurance & Loan leads — commission-tracked. Branch-wise, staff-managed.</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline"><Globe className="h-3.5 w-3.5 mr-1" /> Portal Logins</Button>
          <Button size="sm" variant="secondary">+ New Request</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { k: "Requests (MTD)", v: String(totalReq), sub: "8 services", icon: FileText },
          { k: "Commission", v: formatCurrency(totalRev), sub: "This month", icon: Wallet },
          { k: "Slip Success", v: "94.2%", sub: "Govt portals", icon: CheckCircle2 },
          { k: "Pending KYC", v: "12", sub: "Need docs", icon: Clock },
        ].map(c => (
          <Card key={c.k} className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold tracking-widest text-zinc-500">{c.k}</div>
              <c.icon className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="text-xl font-bold">{c.v}</div>
            <div className="text-xs text-zinc-500">{c.sub}</div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {DIGITAL_SEVAI.map(s => (
          <Card key={s.name}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="text-2xl">{s.icon}</div>
                <Badge variant="success">Active</Badge>
              </div>
              <div className="mt-2 font-semibold text-sm leading-tight">{s.name}</div>
              <div className="text-xs text-zinc-500">Requests: {s.requests} • {formatCurrency(s.revenue)}</div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-7 text-xs">Queue</Button>
                <Button size="sm" variant="secondary" className="flex-1 h-7 text-xs">New</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Shield className="h-4 w-4" /> Compliance & Vault</div></CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="rounded-xl border p-3 flex justify-between"><span>Aadhaar Vault (Encrypted)</span><Badge>256 docs</Badge></div>
            <div className="rounded-xl border p-3 flex justify-between"><span>PAN / Passport Scans</span><Badge>189 docs</Badge></div>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3">
              <div className="font-bold">DPDP Act 2023 — PII encrypted at rest (AES-256), consent logged, audit trail.</div>
              <div>Customer docs auto-expire after 30 days unless consent renewed.</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Commission Ledger — This Month</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {DIGITAL_SEVAI.slice(0, 4).map(s => (
              <div key={s.name} className="flex justify-between border rounded-lg px-3 py-2 text-xs">
                <span>{s.icon} {s.name}</span>
                <span className="font-bold text-emerald-600">{formatCurrency(s.revenue)}</span>
              </div>
            ))}
            <div className="flex justify-between border-t pt-2 font-bold text-sm">
              <span>Total</span>
              <span className="text-emerald-600">{formatCurrency(totalRev)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

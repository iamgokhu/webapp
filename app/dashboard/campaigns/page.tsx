"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { CAMPAIGN_PLATFORMS } from "@/lib/data"
import { Megaphone, Play, Pause, BarChart3, Users, Zap, Target, TrendingUp, Settings, Sparkles } from "lucide-react"
import { useState } from "react"

export default function CampaignsPage() {
  const [running, setRunning] = useState(true)
  const totalReach = CAMPAIGN_PLATFORMS.reduce((s, p) => s + Number(p.reach.replace(/,/g, "")), 0)
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2"><Megaphone className="h-5 w-5 text-emerald-600" /> Campaign Agent — 12 Platforms <Badge variant="success">Running • 12 workers</Badge></h1>
          <p className="text-xs text-zinc-600">One campaign → 12 platforms simultaneously. WhatsApp, Telegram, Instagram, Facebook, Google, SMS, Email, Phone AI, YouTube, Push, Web, Voice. Auto-creates, human approves (Assisted mode).</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant={running ? "outline" : "secondary"} onClick={() => setRunning(!running)} className="gap-1">{running ? <><Pause className="h-3.5 w-3.5" /> Pause All</> : <><Play className="h-3.5 w-3.5" /> Resume All</>}</Button>
          <Button size="sm" variant="secondary" className="gap-1"><Sparkles className="h-3.5 w-3.5" /> New Campaign — Autopilot</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { k: "Total Reach", v: totalReach.toLocaleString("en-IN"), sub: "12 platforms • Today", icon: Users },
          { k: "Avg CTR", v: "6.4%", sub: "Blended • Best: Push 10.4%", icon: TrendingUp },
          { k: "Campaigns", v: "18 Active", sub: "3 Autopilot • 15 Assisted", icon: Target },
          { k: "Budget", v: "₹67 / ₹200", sub: "Campaign Agent • 33% used", icon: BarChart3 },
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

      <Card>
        <CardHeader className="pb-2 flex flex-row items-center justify-between">
          <span className="font-semibold text-sm flex items-center gap-2"><Zap className="h-4 w-4 text-emerald-600" /> 12 Platforms — Live</span>
          <Badge variant="secondary">Campaign Agent • 12 workers • 1,245 jobs today</Badge>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {CAMPAIGN_PLATFORMS.map(p => (
            <div key={p.name} className="rounded-2xl border p-3 bg-white flex flex-col">
              <div className="flex items-start justify-between">
                <div className="text-2xl">{p.icon}</div>
                <Badge variant="success">● Running</Badge>
              </div>
              <div className="mt-2 font-semibold text-sm leading-tight">{p.name}</div>
              <div className="text-xs text-zinc-500">Reach: {p.reach} • CTR {p.ctr}</div>
              <div className="mt-2 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
                <div className="h-full bg-emerald-600" style={{ width: `${Math.round(parseFloat(p.ctr) * 9)}%` }} />
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-7 text-xs">Stats</Button>
                <Button size="sm" variant="outline" className="flex-1 h-7 text-xs">Pause</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Target className="h-4 w-4" /> Campaign Modes</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="rounded-xl border p-3 flex justify-between items-center bg-emerald-50 border-emerald-200">
              <div><div className="font-bold">Autopilot</div><div className="text-xs text-zinc-600">AI creates + runs • Owner approves budget</div></div>
              <Badge>3 live</Badge>
            </div>
            <div className="rounded-xl border p-3 flex justify-between items-center">
              <div><div className="font-bold">Assisted</div><div className="text-xs text-zinc-600">AI drafts, human approves • Default</div></div>
              <Badge variant="secondary">15 drafts</Badge>
            </div>
            <div className="rounded-xl border p-3 flex justify-between items-center">
              <div><div className="font-bold">Manual</div><div className="text-xs text-zinc-600">Human creates everything</div></div>
              <Badge variant="outline">Off</Badge>
            </div>
            <Button size="sm" variant="outline" className="w-full"><Settings className="h-3.5 w-3.5 mr-1" /> Campaign Settings</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Today’s Campaign — Parle-G Launch</div><div className="text-xs text-zinc-500">Target: 2,100 retailers • Scheme: Buy 12 Get 1 • Margin protected</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-xl border p-2"><div className="font-bold">42,300</div><div className="text-zinc-500">Sent</div></div>
              <div className="rounded-xl border p-2"><div className="font-bold">3,840</div><div className="text-zinc-500">Orders</div></div>
              <div className="rounded-xl border p-2"><div className="font-bold text-emerald-600">9.1%</div><div className="text-zinc-500">Conv</div></div>
            </div>
            <div className="rounded-xl bg-zinc-50 border p-3 text-xs">
              <div className="font-bold">12-platform breakdown</div>
              <div>WhatsApp 8.4% • SMS 7.2% • Phone AI 9.1% (best) • Push 10.4% • Instagram 5.1%</div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">View Report</Button>
              <Button size="sm" variant="secondary" className="flex-1">Run on 12 Platforms Again</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

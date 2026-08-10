"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { Phone, Mic, Volume2, PhoneCall, Clock, CheckCircle2, AlertCircle, Settings, Play, Pause, BarChart3, Users } from "lucide-react"
import { useState } from "react"

export default function PhoneAIPage() {
  const [enabled, setEnabled] = useState(true)
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2"><Phone className="h-5 w-5 text-emerald-600" /> Phone AI — Voice Ordering <Badge variant="success">Enabled • Live</Badge></h1>
          <p className="text-xs text-zinc-600">Exotel / Twilio / Kaleyra IVR • Whisper STT • ElevenLabs TTS • Tamil, Hindi, English. Orders via voice, human approves invoices.</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant={enabled ? "outline" : "secondary"} onClick={() => setEnabled(!enabled)} className="gap-1">{enabled ? <><Pause className="h-3.5 w-3.5" /> Pause Voice Intake</> : <><Play className="h-3.5 w-3.5" /> Enable Voice</>}</Button>
          <Button size="sm" variant="outline"><Settings className="h-3.5 w-3.5 mr-1" /> IVR Config</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { k: "Calls Today", v: "127", sub: "89 orders • 70% conversion", icon: PhoneCall },
          { k: "Avg Duration", v: "2m 14s", sub: "Whisper STT 94% accuracy", icon: Clock },
          { k: "Success Rate", v: "92.4%", sub: "Voice → Order", icon: CheckCircle2 },
          { k: "Active Lines", v: "4 / 8", sub: "Exotel • Kaleyra", icon: Users },
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

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Mic className="h-4 w-4 text-emerald-600" /> Live Voice Flow</div><div className="text-xs text-zinc-500">Customer calls → AI asks → STT → Order Control → Confirm → Invoice (Branch Admin)</div></CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border p-3 space-y-2 text-sm">
              <div className="flex gap-2"><Badge variant="secondary">Tamil</Badge><span className="font-mono text-xs">+91 98xxxxxx21 → “Vanakkam, Parle-G 800g rendu box venam”</span></div>
              <div className="flex gap-3 items-start bg-zinc-50 rounded-xl p-3">
                <Volume2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-xs">AI (Tamil): “Parle-G 800g — 2 box, rate ₹85, total ₹170. Confirm pannava?”</div>
                  <div className="text-xs text-zinc-500">Whisper STT → Order Agent → ATS check (1180) → Margin OK → Voice confirm</div>
                </div>
                <Badge variant="success">Confirmed</Badge>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border p-2">Order: <b>ORD-8829</b> • 2 items • ₹1,240</div>
                <div className="rounded-lg border p-2">Next: <b>Branch Admin</b> → Invoice (approval guardrail)</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">Call Log</Button>
              <Button size="sm" variant="secondary" className="flex-1">Test Call — Your Number</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><BarChart3 className="h-4 w-4" /> IVR Channels & Guardrails</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between rounded-xl border px-3 py-2"><span>Exotel — Primary (Tamil Nadu)</span><Badge variant="success">● Live</Badge></div>
            <div className="flex items-center justify-between rounded-xl border px-3 py-2"><span>Twilio — Fallback (Hindi/English)</span><Badge variant="secondary">Standby</Badge></div>
            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs">
              <div className="font-bold flex items-center gap-1"><AlertCircle className="h-3.5 w-3.5" /> Guardrail: Voice cannot create invoice directly</div>
              <div>Voice → Order (VALIDATING) → Order Control validates ATS/margin → Branch Admin invoices. AI cannot post financial entries.</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border p-3 text-center"><div className="font-bold">4.8★</div><div className="text-zinc-500">CSAT voice</div></div>
              <div className="rounded-xl border p-3 text-center"><div className="font-bold">₹0</div><div className="text-zinc-500">Extra cost (Enterprise included)</div></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2"><div className="font-semibold text-sm">Recent Voice Orders — Today</div></CardHeader>
        <CardContent className="space-y-2">
          {[
            { id: "CALL-142", party: "SKS Traders — Tamil", items: "Parle-G 2box, Atta 1", status: "CONFIRMED", time: "10:21 AM" },
            { id: "CALL-143", party: "Murugan Stores — Hindi", items: "Fortune Oil 5L", status: "VALIDATING", time: "10:45 AM" },
            { id: "CALL-144", party: "Aavin Canteen — English", items: "Sugar 10kg", status: "CONFIRMED", time: "11:02 AM" },
          ].map(c => (
            <div key={c.id} className="flex items-center gap-3 rounded-xl border px-3 py-2 text-sm">
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <div className="flex-1"><div className="font-medium text-xs">{c.id} • {c.party}</div><div className="text-xs text-zinc-500">{c.items} • {c.time}</div></div>
              <Badge variant={c.status === "CONFIRMED" ? "success" : "secondary"}>{c.status}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

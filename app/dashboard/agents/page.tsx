"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { AGENTS } from "@/lib/data"
import { Bot, Pause, Play, Zap, Cpu, DollarSign } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AgentsPage(){
  const [agents, setAgents] = useState(AGENTS)
  const toggle = (name:string)=>{
    setAgents(a=>a.map(x=>x.name===name?{...x,status: x.status==="Running"?"Paused":"Running"}:x))
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="text-xl font-bold flex items-center gap-2"><Bot className="h-5 w-5" /> AI Agent Operating System — Enabled</h1>
        <Badge variant="secondary" className="gap-1"><Cpu className="h-3 w-3" /> 8 agents • 3 meta • Auto-scale • 12-platform Campaign</Badge>
      </div>

      <Card className="p-4 bg-zinc-900 text-white">
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-amber-400" /> Master Meta-Agent orchestrates all</span>
          <span>•</span>
          <span> Guardrails: AI cannot create/approve credit notes, replacements, price overrides, or post finance directly</span>
          <span>•</span>
          <span className="text-emerald-400 font-bold">Phone AI Voice + Digital Sevai ENABLED • Campaign 12x RUNNING</span>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        {agents.map(a=>(
          <Card key={a.name} className={a.status==="Paused"?"opacity-70":""}>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2"><div className="h-8 w-8 rounded-lg bg-zinc-900 text-white grid place-items-center text-xs font-bold">{a.level}</div><div><div className="font-semibold text-sm leading-none">{a.name}</div><div className="text-xs text-zinc-500">{a.jobs} jobs today • {a.workers} workers {a.name==="Campaign Agent" && "• 12 platforms"}</div></div></div>
              <Badge variant={a.status==="Running"?"success":"secondary"}>{a.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-xs"><DollarSign className="h-3 w-3" /> Budget ₹{a.cost} / ₹{a.budget} <div className="flex-1 h-1.5 rounded-full bg-zinc-100 overflow-hidden ml-2"><div className="h-full bg-emerald-600" style={{width: `${Math.min(100,(a.cost/a.budget)*100)}%`}} /></div><span>{Math.round(a.cost/a.budget*100)}%</span></div>
              {a.name==="Campaign Agent" && a.status==="Running" && (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2 text-xs">
                  <div className="font-bold text-emerald-700">12 Platforms Live: WhatsApp • Telegram • Instagram • Facebook • Google • SMS • Email • Phone AI • YouTube • Push • Web • Voice</div>
                  <div className="text-zinc-600">1 campaign → 12x broadcast. <Link href="/dashboard/campaigns" className="underline font-medium">Open Campaigns 12x →</Link></div>
                </div>
              )}
              {a.name==="Phone AI — Voice Ordering" as any && (
                <div className="text-xs text-emerald-600 font-medium">Enabled • Voice ordering live</div>
              )}
              <div className="flex gap-2">
                <Button size="sm" variant={a.status==="Running"?"outline":"secondary"} className="flex-1 h-8 text-xs" onClick={()=>toggle(a.name)}>{a.status==="Running"?<><Pause className="h-3 w-3 mr-1" /> Pause</>:<><Play className="h-3 w-3 mr-1" /> Resume</>}</Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Logs</Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Config</Button>
              </div>
              <div className="text-xs text-zinc-500">Max tokens/day, max cost, max tool calls enforced. On overrun → pause + notify Meta-Agent (Telegram/Slack).</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="p-4 bg-emerald-50 border-emerald-200">
          <div className="font-bold text-sm flex items-center gap-2">📞 Phone AI — Voice Ordering <Badge variant="success">Enabled</Badge></div>
          <div className="text-xs text-zinc-600 mt-1">Whisper STT + ElevenLabs TTS • Tamil/Hindi/English • 127 calls today • 92.4% success. <Link href="/dashboard/phone-ai" className="underline font-medium">Open Phone AI →</Link></div>
        </Card>
        <Card className="p-4 bg-emerald-50 border-emerald-200">
          <div className="font-bold text-sm flex items-center gap-2">🏛️ Digital Sevai <Badge variant="success">Enabled</Badge></div>
          <div className="text-xs text-zinc-600 mt-1">8 services • 598 requests MTD • ₹1,08,650 commission. <Link href="/dashboard/digital-sevai" className="underline font-medium">Open Digital Sevai →</Link></div>
        </Card>
        <Card className="p-4 bg-emerald-50 border-emerald-200">
          <div className="font-bold text-sm flex items-center gap-2">📢 Campaign 12x <Badge variant="success">Running</Badge></div>
          <div className="text-xs text-zinc-600 mt-1">12 platforms • 142k reach today • 6.4% CTR. <Link href="/dashboard/campaigns" className="underline font-medium">Open Campaigns →</Link></div>
        </Card>
      </div>
    </div>
  )
}

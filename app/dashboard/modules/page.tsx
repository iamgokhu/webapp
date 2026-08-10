"use client"
import { Card, CardContent, Badge, Button } from "@/components/ui"
import { MODULES } from "@/lib/data"
import { Puzzle, Lock } from "lucide-react"
import { useState } from "react"

export default function ModulesPage(){
  const [mods, setMods] = useState(MODULES)
  const toggle = (code:string)=>{
    setMods(m=>m.map(x=>x.code===code?{...x,status: x.status==="Enabled"?"Disabled":"Enabled"}:x))
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h1 className="text-xl font-bold text-white flex items-center gap-2"><Puzzle className="h-5 w-5" /> Module Marketplace — Paid</h1>
        <Badge variant="secondary">Lego-block • Enable/disable without rebuild • Each module owns its data</Badge>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mods.map(m=>(
          <Card key={m.code} className={m.paid?"border-orange-200":""}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="text-2xl">{m.icon}</div>
                <Badge variant={m.status==="Enabled"?"success":"secondary"}>{m.status}</Badge>
              </div>
              <div className="mt-2 font-semibold text-sm">{m.name}</div>
              <div className="text-xs text-zinc-400">{m.cat} • {m.code}</div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className={m.paid?"font-bold text-orange-600":"text-zinc-400"}>{m.price}</span>
                {m.paid && m.status==="Disabled" && <span className="flex items-center gap-1 text-zinc-400"><Lock className="h-3 w-3" /> Paid unlock</span>}
              </div>
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant={m.status==="Enabled"?"outline":"secondary"} className="flex-1 h-8 text-xs" onClick={()=>toggle(m.code)}>{m.status==="Enabled"?"Disable":"Enable"}</Button>
                <Button size="sm" variant="outline" className="flex-1 h-8 text-xs">Config</Button>
              </div>
              <div className="mt-2 text-xs text-zinc-400">Health: /api/v1/{m.code}/health • Events: {m.paid?"via Redis Streams":"—"}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="p-4 bg-amber-50 border-amber-200 text-sm">
        <span className="font-bold">Paid billing:</span> Growth unlocks 28 modules, Enterprise unlocks all 35. Disabled modules bill ₹0. Prorated per day via Razorpay.
      </Card>
    </div>
  )
}

"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { DELIVERIES } from "@/lib/data"
import { Truck, MapPin, CheckCircle2, Phone, Banknote, Camera } from "lucide-react"

export default function DeliveryPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold flex items-center gap-2"><Truck className="h-5 w-5" /> Delivery & Logistics — OTP + POD <Badge>Paid</Badge></h1>
      <div className="grid lg:grid-cols-3 gap-4">
        {DELIVERIES.map(d=>(
          <Card key={d.id}>
            <CardHeader className="pb-2 flex flex-row items-center justify-between"><span className="font-mono text-xs font-bold">{d.id}</span><Badge variant={d.status==="Delivered"?"success":d.status==="In Transit"?"warning":"secondary"}>{d.status}</Badge></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-xs"><MapPin className="h-3.5 w-3.5" /> {d.route} • {d.orders} orders • Driver: <b>{d.driver}</b></div>
              <div className="rounded-xl border p-2 bg-zinc-50 text-xs space-y-1">
                <div className="flex justify-between"><span>OTP</span><b className="font-mono">{d.otp}</b></div>
                <div className="flex justify-between"><span>Cash to collect</span><b>₹ 42,800</b></div>
                <div className="flex justify-between"><span>Proof</span><span className="flex gap-1"><Camera className="h-3 w-3" /> Photo + GPS</span></div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 h-7 text-xs"><Phone className="h-3 w-3 mr-1" /> Call</Button>
                <Button size="sm" className="flex-1 h-7 text-xs"><CheckCircle2 className="h-3 w-3 mr-1" /> Confirm OTP</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="p-4">
        <div className="font-semibold text-sm flex items-center gap-2"><Banknote className="h-4 w-4" /> Cash Denomination Tracking (Paid — Fraud Prevention)</div>
        <div className="mt-2 grid grid-cols-6 gap-2 text-xs text-center">
          {["500×40", "200×25", "100×38", "50×12", "20×10", "10×15"].map(d=>(
            <div key={d} className="rounded-xl border p-2 bg-white"><div className="font-bold">{d}</div><div className="text-zinc-500">notes</div></div>
          ))}
        </div>
        <div className="text-xs text-zinc-500 mt-2">Collection ₹42,800 vs deposit ₹42,800 — <span className="text-emerald-600 font-semibold">Matched (no mismatch)</span></div>
      </Card>
    </div>
  )
}

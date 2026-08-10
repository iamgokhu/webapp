"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { MapPin, Camera, ShieldAlert, Clock, CheckCircle2 } from "lucide-react"

export default function HrmsPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-white">HRMS & Attendance — GPS + Selfie <Badge variant="success">Paid • Geofence 100m</Badge></h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Today — Check-ins</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {[
              { name: "Kumar — Salesman", time: "09:02", loc: "Salem HQ (18m)", status: "VERIFIED", selfie: "✓" },
              { name: "Suresh — Salesman", time: "09:18", loc: "Erode (42m)", status: "FLAGGED", selfie: "Mock GPS?" },
              { name: "Arun — Delivery", time: "08:55", loc: "Salem HQ (6m)", status: "VERIFIED", selfie: "✓" },
            ].map(r=>(
              <div key={r.name} className="flex items-center gap-3 rounded-xl border px-3 py-2">
                <div className="h-8 w-8 rounded-full bg-zinc-900 text-white grid place-items-center text-xs font-bold">{r.name[0]}</div>
                <div className="flex-1"><div className="font-medium text-xs">{r.name}</div><div className="text-xs text-zinc-400 flex gap-2"><Clock className="h-3 w-3" />{r.time} • <MapPin className="h-3 w-3" />{r.loc} • <Camera className="h-3 w-3" />{r.selfie}</div></div>
                <Badge variant={r.status==="VERIFIED"?"success":"warning"}>{r.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Anti-Fake-GPS — Paid Shield</div></CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex gap-2"><ShieldAlert className="h-4 w-4 text-red-600" /> Mock location detected — Suresh • Emulator + location spoof • Risk +40</div>
            <div className="rounded-xl border p-3 space-y-1">
              <div className="font-semibold flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-orange-500" /> Branch Geofence — 100m radius</div>
              <div className="text-zinc-400">Salem HQ: lat 11.6643, lon 78.1460 • Verified via PostGIS • Device integrity + rooted check.</div>
            </div>
            <Button size="sm" variant="outline" className="w-full">View on Map — Leaflet</Button>
          </CardContent>
        </Card>
      </div>
      <Card className="p-4 text-sm bg-zinc-900 text-white">
        <div className="font-bold">Paid — Salary + PF/ESI/PT + Leave (Enterprise)</div>
        <div className="opacity-70">Payroll automation, payslips, GSTR for salaries. Auto-deduct for flagged attendance.</div>
      </Card>
    </div>
  )
}

"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { MapPin, Camera, ShieldAlert, Clock, CheckCircle2, Sliders, Target } from "lucide-react"
import { useState } from "react"

export default function HrmsPage(){
  const [radius, setRadius] = useState(10) // 5m to 15m
  const checkIns = [
    { name: "Kumar — Salesman", time: "09:02", dist: 6, status: 6 <= radius ? "VERIFIED" : "FLAGGED", selfie: "✓" },
    { name: "Suresh — Salesman", time: "09:18", dist: 42, status: 42 <= radius ? "VERIFIED" : "FLAGGED", selfie: "Mock GPS?" },
    { name: "Arun — Delivery", time: "08:55", dist: 9, status: 9 <= radius ? "VERIFIED" : "FLAGGED", selfie: "✓" },
    { name: "Priya — Stock", time: "09:12", dist: 14, status: 14 <= radius ? "VERIFIED" : "FLAGGED", selfie: "✓" },
  ]
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl font-bold">HRMS & Attendance — GPS + Selfie <Badge variant="success">Geofence 5–15m • {radius}m active</Badge></h1>
        <Badge variant="outline">PostGIS • 5-15m precision</Badge>
      </div>

      <Card className="p-4">
        <div className="flex items-center gap-2 font-semibold text-sm"><Sliders className="h-4 w-4" /> Geofence Radius — 5m to 15m (tight precision)</div>
        <div className="mt-3 flex items-center gap-4">
          <span className="text-xs">5m</span>
          <input type="range" min={5} max={15} value={radius} onChange={e => setRadius(Number(e.target.value))} className="flex-1 accent-emerald-600" />
          <span className="text-xs">15m</span>
          <div className="ml-4 flex items-center gap-2 border rounded-lg px-3 py-1.5 bg-emerald-50 border-emerald-200">
            <Target className="h-4 w-4 text-emerald-600" />
            <span className="font-mono font-bold">{radius}m</span>
            <span className="text-xs text-zinc-600">active</span>
          </div>
        </div>
        <div className="text-xs text-zinc-500 mt-2">Tight 5–15m = no fake “nearby” check-ins. 100m was too loose — now requires staff to be at the gate. Verified via PostGIS ST_DWithin, GPS accuracy ≤{radius}m, device integrity + mock-location check. Change per branch instantly.</div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Today — Check-ins (vs {radius}m)</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            {checkIns.map(r=>(
              <div key={r.name} className="flex items-center gap-3 rounded-xl border px-3 py-2">
                <div className="h-8 w-8 rounded-full bg-zinc-900 text-white grid place-items-center text-xs font-bold">{r.name[0]}</div>
                <div className="flex-1"><div className="font-medium text-xs">{r.name}</div><div className="text-xs text-zinc-500 flex gap-2"><Clock className="h-3 w-3" />{r.time} • <MapPin className="h-3 w-3" />{r.dist}m • <Camera className="h-3 w-3" />{r.selfie}</div></div>
                <Badge variant={r.status==="VERIFIED"?"success":"warning"}>{r.status}</Badge>
              </div>
            ))}
            <div className="text-xs text-zinc-500">Kumar 6m ✓ inside {radius}m, Arun 9m ✓ inside, Priya 14m {14 <= radius ? "✓ inside" : "✗ outside — flagged"}, Suresh 42m ✗ outside + mock GPS → flagged.</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Anti-Fake-GPS — Shield</div></CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex gap-2"><ShieldAlert className="h-4 w-4 text-red-600" /> Mock location detected — Suresh • Emulator + location spoof • Risk +40 • Outside {radius}m</div>
            <div className="rounded-xl border p-3 space-y-1">
              <div className="font-semibold flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Branch Geofence — {radius}m radius (5–15m)</div>
              <div className="text-zinc-600">Salem HQ: lat 11.6643, lon 78.1460 • Radius {radius}m • Verified via PostGIS ST_DWithin • GPS accuracy ≤3m required • Device integrity + rooted check • 15m = gate, 5m = counter.</div>
            </div>
            <Button size="sm" variant="outline" className="w-full">View on Map — Leaflet • Circle {radius}m</Button>
          </CardContent>
        </Card>
      </div>
      <Card className="p-4 text-sm bg-zinc-900 text-white">
        <div className="font-bold">Salary + PF/ESI/PT + Leave (Enterprise)</div>
        <div className="opacity-70">Payroll automation, payslips, GSTR for salaries. Auto-deduct for flagged attendance (outside {radius}m).</div>
      </Card>
    </div>
  )
}

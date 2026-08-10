"use client"
import { Card, CardContent, CardHeader, Badge } from "@/components/ui"
import { MapPinned, Timer, Route, AlertTriangle } from "lucide-react"

export default function FieldPage(){
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold flex items-center gap-2"><MapPinned className="h-5 w-5" /> Field Intelligence — Beat & Stay Detection</h1>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Beat Map — Today</div><div className="text-xs text-zinc-500">Expo Task Manager • Background GPS sync • Offline queue</div></CardHeader>
          <CardContent>
            <div className="h-[260px] rounded-xl border bg-gradient-to-br from-emerald-50 to-sky-50 grid place-items-center text-sm text-zinc-600 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{backgroundImage:"radial-gradient(circle at 30% 40%, #f97316 2px, transparent 2px), radial-gradient(circle at 70% 30%, #18181b 2px, transparent 2px), radial-gradient(circle at 50% 70%, #10b981 2px, transparent 2px)", backgroundSize:"40px 40px"}} />
              <div className="relative bg-white/90 backdrop-blur rounded-xl border px-4 py-3 text-center">
                <Route className="h-5 w-5 mx-auto text-orange-500" />
                <div className="font-semibold">Live Route — Kumar</div>
                <div className="text-xs">42 km • 14 outlets • 3h 42m active</div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
              <div className="rounded-xl border p-2"><div className="font-bold">14</div><div className="text-zinc-500">Outlets visited</div></div>
              <div className="rounded-xl border p-2"><div className="font-bold">11 ✓</div><div className="text-zinc-500">≥15 min stay</div></div>
              <div className="rounded-xl border p-2"><div className="font-bold text-amber-600">3 flagged</div><div className="text-zinc-500">Idle / short</div></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-1"><Timer className="h-4 w-4" /> Stay & Idle Alerts</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="rounded-xl border px-3 py-2 flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-500" /><div><div className="font-medium text-xs">Idle — 22 min at Tea shop (unscheduled)</div><div className="text-xs text-zinc-500">10:42 AM • Auto-alert to Branch Admin</div></div></div>
            <div className="rounded-xl border px-3 py-2"><div className="font-medium text-xs">Outlet: Priya Supermarket — 18 min ✓</div><div className="text-xs text-zinc-500">Geofence entry 11:02 • exit 11:20 • Order ₹4,200</div></div>
            <div className="rounded-xl border px-3 py-2"><div className="font-medium text-xs">Route deviation — 1.2 km off beat</div><div className="text-xs text-zinc-500">Kumar • 12:10 PM • Notified</div></div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

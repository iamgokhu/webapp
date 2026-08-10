"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/store"
import { useEffect, useState } from "react"
import { Button, Badge } from "@/components/ui"
import { LayoutDashboard, Receipt, Package, Users, ShoppingCart, Truck, UserCheck, MapPinned, Bot, Puzzle, BarChart3, Settings, Shield, LogOut, Menu, X, Sparkles, CreditCard, Phone, Building2, Megaphone } from "lucide-react"

const NAV = [
  { href: "/dashboard", label: "Command Center", icon: LayoutDashboard },
  { href: "/dashboard/billing", label: "Billing — 8sec", icon: Receipt },
  { href: "/dashboard/inventory", label: "Inventory", icon: Package },
  { href: "/dashboard/parties", label: "Parties", icon: Users },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/delivery", label: "Delivery", icon: Truck },
  { href: "/dashboard/hrms", label: "HRMS & Attendance", icon: UserCheck },
  { href: "/dashboard/field", label: "Field Intel", icon: MapPinned },
  { href: "/dashboard/phone-ai", label: "Phone AI — Voice", icon: Phone },
  { href: "/dashboard/digital-sevai", label: "Digital Sevai", icon: Building2 },
  { href: "/dashboard/campaigns", label: "Campaigns 12x", icon: Megaphone },
  { href: "/dashboard/agents", label: "AI Agents", icon: Bot },
  { href: "/dashboard/modules", label: "Modules", icon: Puzzle },
  { href: "/dashboard/reports", label: "Reports & GST", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings & Billing", icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const paid = typeof window !== "undefined" ? localStorage.getItem("mathi_paid") : null
    // allow demo without auth — but show prompt
  }, [])

  return (
    <div className="min-h-screen bg-[#F6F6F3] flex">
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-[280px] bg-zinc-900 text-zinc-100 flex flex-col border-r border-zinc-800 transition ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-14 flex items-center gap-3 px-4 border-b border-zinc-800">
          <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-sm">M</div>
          <div>
            <div className="font-bold tracking-tight leading-none">Mathi PI OS</div>
            <div className="text-[10px] tracking-widest text-zinc-400">ENTERPRISE</div>
          </div>
          <button onClick={()=>setOpen(false)} className="lg:hidden ml-auto"><X className="h-5 w-5" /></button>
        </div>

        <div className="p-3">
          <div className="rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-3 text-white">
            <div className="text-xs font-bold flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> {user?.plan ? user.plan.toUpperCase() : "ENTERPRISE"}</div>
            <div className="text-[11px] opacity-90">All 35 modules • Unlimited branches</div>
            <div className="mt-2 h-1.5 rounded-full bg-white/30 overflow-hidden"><div className="h-full bg-white" style={{ width: "68%" }} /></div>
            <div className="text-[10px] mt-1 opacity-80">68% quota • Renews 09 Sep 2026 • Razorpay</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {NAV.map(n => {
            const active = pathname === n.href
            return (
              <Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${active ? "bg-white text-zinc-900 font-semibold" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`}>
                <n.icon className="h-4 w-4" /> {n.label}
                {n.label.includes("AI Agents") && <Badge className="ml-auto bg-emerald-600 text-white text-[10px]">7 LIVE</Badge>}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-zinc-800 p-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white text-zinc-900 grid place-items-center font-bold text-xs">{user?.avatar || "GR"}</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold leading-none truncate">{user?.name || "Gokhul Rajesh"}</div>
              <div className="text-xs text-zinc-400 truncate">{user?.role || "Super Admin / Owner"} • {user?.branch || "Salem HQ"}</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button variant="secondary" size="sm" className="h-8 text-xs" onClick={()=>router.push("/checkout?plan=enterprise")}>Manage Plan</Button>
            <Button variant="outline" size="sm" className="h-8 text-xs bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700" onClick={()=>{logout(); router.push("/login")}}><LogOut className="h-3.5 w-3.5 mr-1" /> Logout</Button>
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1"><Shield className="h-3 w-3" /> DPDP • Audit • Payments verified</div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b bg-white/80 backdrop-blur px-4">
          <button onClick={()=>setOpen(true)} className="lg:hidden p-2 rounded-lg border"><Menu className="h-4 w-4" /></button>
          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="text-zinc-500">Salem HQ • Branch: Salem-A • Today: {new Date().toLocaleDateString("en-IN")}</span>
            <span className="hidden lg:inline-flex items-center gap-1 ml-2"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live — Redis • Postgres • Meilisearch</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="outline" className="hidden sm:inline-flex">Razorpay • GST IRN Ready</Badge>
            <Link href="/checkout?plan=growth"><Button size="sm" variant="secondary" className="hidden sm:inline-flex">Upgrade / Renew</Button></Link>
          </div>
        </div>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}

"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { useAuth } from "@/lib/store"
import { PLANS } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { CreditCard, Shield, Building2, Key, Bell, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export default function SettingsPage(){
  const { user } = useAuth()
  const [planId, setPlanId] = useState<string>("enterprise")
  useEffect(()=>{
    const p = typeof window!=="undefined"? localStorage.getItem("mathi_plan"): null
    if (p) setPlanId(p)
    else if (user?.plan) setPlanId(user.plan)
  },[user])
  const plan = PLANS.find(p=>p.id===planId) || PLANS[2]
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Settings & Billing — Paid</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2"><div className="font-semibold flex items-center gap-2"><CreditCard className="h-4 w-4" /> Subscription — Razorpay</div></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border p-4 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
              <div className="flex items-center justify-between"><span className="font-bold">{plan.name} — Paid</span><Badge className="bg-emerald-500 text-white">Active • Trial 14d</Badge></div>
              <div className="text-xs opacity-70">{plan.description}</div>
              <div className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-bold">{formatCurrency(plan.priceMonthly)}/mo</span><span className="text-xs opacity-70">or {formatCurrency(plan.priceYearly)}/year (save 17%)</span></div>
              <div className="mt-2 text-xs opacity-70">Next invoice: 24 Aug 2026 • Razorpay Subscription ID: sub_Or9xxx • GST 18% extra</div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div className="rounded-xl border p-3"><div className="font-semibold">Usage this month</div><div>483 invoices • 2,842 audit logs • 14 GB storage</div></div>
              <div className="rounded-xl border p-3"><div className="font-semibold">Branches</div><div>5 / Unlimited (Enterprise)</div></div>
            </div>
            <div className="flex gap-2">
              <Link href="/checkout?plan=growth"><Button size="sm" variant="outline">Change Plan</Button></Link>
              <Button size="sm" variant="outline">Download GST Invoice (IRN)</Button>
              <Button size="sm" variant="outline">Cancel</Button>
            </div>
            <div className="text-xs text-zinc-500">Paid includes: managed DB, S3, backups, WAF, SSL, GST updates.7347.missing</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Building2 className="h-4 w-4" /> Business Profile</div></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <label className="block"><span className="text-xs font-medium">Business Name</span><input defaultValue="SKS Distributors Pvt Ltd" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" /></label>
            <label className="block"><span className="text-xs font-medium">GSTIN • GSP</span><input defaultValue="33ABCDE1234F1Z5 — ClearTax" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" /></label>
            <label className="block"><span className="text-xs font-medium">Branches</span><input defaultValue="Salem HQ, Salem-B, Erode, Namakkal, Hosur" className="mt-1 w-full rounded-xl border px-3 py-2 bg-white" /></label>
            <Button size="sm" className="w-full">Save — PLATFORM_MODE=internal</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Key className="h-4 w-4" /> API Keys & Secrets</div></CardHeader><CardContent className="text-xs space-y-2"><div className="rounded-xl border p-2 font-mono">sk_live_•••••••••9f2a (Razorpay)</div><div className="rounded-xl border p-2 font-mono">ANTHROPIC_••••••••</div><Button size="sm" variant="outline" className="w-full h-8 text-xs">Rotate in AWS Secrets Manager</Button></CardContent></Card>
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Bell className="h-4 w-4" /> Notifications</div></CardHeader><CardContent className="text-xs space-y-1"><label className="flex justify-between border rounded-xl px-3 py-2"><span>WhatsApp (Gupshup)</span><span className="text-emerald-600">● ON</span></label><label className="flex justify-between border rounded-xl px-3 py-2"><span>SMS (MSG91)</span><span className="text-emerald-600">● ON</span></label><label className="flex justify-between border rounded-xl px-3 py-2"><span>Email (Resend/SES)</span><span className="text-emerald-600">● ON</span></label></CardContent></Card>
        <Card><CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Globe className="h-4 w-4" /> Platform Mode</div></CardHeader><CardContent className="text-xs space-y-2"><div className="rounded-xl border p-3 bg-zinc-50"><div>PLATFORM_MODE=<b>internal</b></div><div>MULTI_TENANT=false • SUBSCRIPTIONS_ENABLED=true (paid)</div><div>PUBLIC_SIGNUP=customer+retailer • STAFF_SIGNUP=false</div></div><div className="flex items-center gap-1 text-emerald-600"><Shield className="h-3.5 w-3.5" /> Paid hardening: WAF, VPC, TLS 1.3</div></CardContent></Card>
      </div>
    </div>
  )
}

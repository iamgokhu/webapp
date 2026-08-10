"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { PLANS } from "@/lib/data"
import { Button, Card, CardContent, CardHeader, Badge } from "@/components/ui"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { useState, Suspense } from "react"
import { Shield, Check, CreditCard, Smartphone, Building2, ArrowLeft, Sparkles } from "lucide-react"

function CheckoutInner() {
  const params = useSearchParams()
  const planId = (params.get("plan") as any) || "growth"
  const plan = PLANS.find(p => p.id === planId) || PLANS[1]
  const [annual, setAnnual] = useState(true)
  const [paying, setPaying] = useState(false)
  const [done, setDone] = useState(false)
  const price = annual ? plan.priceYearly : plan.priceMonthly
  const router = useRouter()

  const pay = () => {
    setPaying(true)
    setTimeout(() => {
      setDone(true)
      if (typeof window !== "undefined") localStorage.setItem("mathi_plan", plan.id)
      setTimeout(() => router.push("/dashboard"), 1200)
    }, 1600)
  }

  if (done) {
    return (
      <div className="min-h-screen grid place-items-center bg-emerald-50 p-6">
        <Card className="max-w-md w-full text-center p-8">
          <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white"><Check className="h-6 w-6" /></div>
          <h1 className="mt-4 text-2xl font-bold">Payment Successful 🎉</h1>
          <p className="text-sm text-zinc-600 mt-2">Welcome to Mathi PI OS — <b>{plan.name}</b> (Paid). Your 14-day trial is active. Redirecting to Command Center…</p>
          <div className="mt-4 text-xs text-zinc-500">Receipt sent to +91 98xxxxxx10 • Invoice #RZPY-{Math.floor(Math.random()*1000000)}</div>
          <Link href="/dashboard" className="mt-6 inline-block"><Button>Go to Dashboard →</Button></Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FCFCF9]">
      <div className="mx-auto max-w-[1080px] px-4 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900"><ArrowLeft className="h-4 w-4" /> Back to pricing</Link>
        <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div>
            <Badge variant="secondary" className="gap-1"><Sparkles className="h-3 w-3" /> Paid Checkout — Razorpay Secure</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">Checkout — {plan.name}</h1>
            <p className="text-zinc-600 text-sm mt-1">{plan.description} • 14-day free trial, then {formatCurrency(price)} {annual ? "/year" : "/month"} + 18% GST</p>

            <div className="mt-6 inline-flex rounded-full border bg-zinc-50 p-1 text-sm">
              <button onClick={() => setAnnual(false)} className={`px-4 py-1.5 rounded-full ${!annual ? "bg-zinc-900 text-white" : ""}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-4 py-1.5 rounded-full ${annual ? "bg-zinc-900 text-white" : ""}`}>Annual <span className="ml-1 text-emerald-600 font-bold">Save 17%</span></button>
            </div>

            <Card className="mt-6">
              <CardHeader className="pb-2"><div className="font-semibold">Business details</div><div className="text-xs text-zinc-500">For GST invoice & e-Way setup</div></CardHeader>
              <CardContent className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="space-y-1 text-sm"><span className="font-medium">Business name</span><input defaultValue="SKS Distributors" className="w-full rounded-xl border px-3 py-2 bg-white" /></label>
                  <label className="space-y-1 text-sm"><span className="font-medium">GSTIN</span><input placeholder="33ABCDE1234F1Z5" className="w-full rounded-xl border px-3 py-2 bg-white" /></label>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="space-y-1 text-sm"><span className="font-medium">Mobile (OTP)</span><input defaultValue="9876543210" className="w-full rounded-xl border px-3 py-2 bg-white" /></label>
                  <label className="space-y-1 text-sm"><span className="font-medium">Email for receipts</span><input defaultValue="owner@sksdistributors.in" className="w-full rounded-xl border px-3 py-2 bg-white" /></label>
                </div>
                <label className="space-y-1 text-sm block"><span className="font-medium">Coupon</span>
                  <div className="flex gap-2"><input placeholder="ENTERPRISE20" className="flex-1 rounded-xl border px-3 py-2 bg-white" /><Button variant="outline" size="sm">Apply</Button></div>
                </label>
                <div className="flex items-center gap-2 text-xs text-zinc-600"><Shield className="h-4 w-4 text-emerald-600" /> GST invoice will be auto-generated with IRN via GSP.</div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader className="pb-2"><div className="font-semibold">Payment method</div></CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-xl border-2 border-emerald-600 bg-emerald-50 p-3 text-center font-semibold flex flex-col items-center gap-1"><CreditCard className="h-5 w-5" /> Card</div>
                  <div className="rounded-xl border p-3 text-center flex flex-col items-center gap-1"><Smartphone className="h-5 w-5" /> UPI</div>
                  <div className="rounded-xl border p-3 text-center flex flex-col items-center gap-1"><Building2 className="h-5 w-5" /> Netbanking</div>
                </div>
                <div className="rounded-xl border bg-white p-3 grid grid-cols-2 gap-3 text-sm">
                  <input placeholder="Card number" defaultValue="4111 1111 1111 1111" className="rounded-lg border px-3 py-2" />
                  <input placeholder="MM / YY" defaultValue="12 / 29" className="rounded-lg border px-3 py-2" />
                  <input placeholder="CVV" defaultValue="123" className="rounded-lg border px-3 py-2" />
                  <input placeholder="Name on card" defaultValue="GOKHUL RAJESH" className="rounded-lg border px-3 py-2" />
                </div>
                <div className="text-xs text-zinc-500">Powered by <b>Razorpay</b> • UPI: mathi@razorpay • Cards, Netbanking, NEFT/RTGS, EMIs supported</div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-6 h-fit space-y-4">
            <Card className="border-zinc-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="font-bold">{plan.name} — Paid</div>
                  <Badge variant="success">14-day trial</Badge>
                </div>
                <div className="text-xs text-zinc-500">{annual ? "Billed annually" : "Billed monthly"} • Cancel anytime</div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Plan</span><span className="font-semibold">{formatCurrency(price)}</span></div>
                <div className="flex justify-between"><span>GST 18%</span><span>{formatCurrency(Math.round(price*0.18))}</span></div>
                <div className="flex justify-between border-t pt-3 font-bold text-base"><span>Due today</span><span className="text-emerald-600">₹0 — trial</span></div>
                <div className="text-xs text-zinc-500">After trial: {formatCurrency(price+Math.round(price*0.18))} {annual ? "/year" : "/month"} incl. GST. Setup + onboarding included.</div>
                <Button onClick={pay} disabled={paying} variant="secondary" className="w-full mt-2 h-12 text-base">
                  {paying ? "Processing via Razorpay…" : `Start Trial — Pay ${formatCurrency(0)} now`}
                </Button>
                <div className="text-xs text-center text-zinc-500">Secure • 3D Secure 2.0 • PCI DSS</div>
                <div className="rounded-xl bg-zinc-50 border p-3 text-xs space-y-1">
                  <div className="font-semibold">What you get instantly:</div>
                  <div className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5" /> All modules for {plan.name} + onboarding call</div>
                  <div className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5" /> AWS Mumbai deployment, backups, SSL</div>
                  <div className="flex gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5" /> GST e-Invoice, e-Way, GSTR JSON export</div>
                </div>
                <div className="text-xs text-zinc-500 text-center">Need invoice for company? We issue GST IRN automatically.</div>
              </CardContent>
            </Card>

            <Card className="p-4 bg-emerald-50 border-emerald-200">
              <div className="text-sm font-semibold">Why Mathi PI OS — Paid?</div>
              <ul className="mt-2 space-y-1 text-xs text-zinc-700 list-disc list-inside">
                <li>8-sec billing saves ~2 hrs/day per counter</li>
                <li>AI blocked ₹ 23L fraud last quarter (across paid customers)</li>
                <li>15-min stay detection → +22% outlet visits</li>
                <li>Single owner controls 50+ staff via Command Center</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return <Suspense fallback={<div className="p-10 text-center">Loading checkout…</div>}><CheckoutInner /></Suspense>
}

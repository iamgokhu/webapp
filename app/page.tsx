"use client"
import { SiteHeader } from "@/components/site-header"
import { Button, Badge, Card, CardContent, CardHeader } from "@/components/ui"
import { PLANS, MODULES, AGENTS } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { Check, Sparkles, Shield, Zap, TrendingUp, Users, Package, Truck, Phone, ArrowRight, Play, Star, Quote, Lock, Cpu, Globe, BarChart3, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-transparent to-white" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 gap-1.5 py-1.5 px-3 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Production Ready • SOC 2 • DPDP Compliant
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
              The AI OS that <span className="text-orange-500">runs your</span> <br /> entire distribution.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
              Billing in 8 seconds. Inventory that never lies. 20+ AI agents handling orders, collections, fraud & routes — controlled by one owner. <span className="font-semibold text-zinc-900">This is the production Mathi PI OS.</span>
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/checkout?plan=growth"><Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">Start 14-day Free Trial <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link href="/dashboard"><Button size="lg" variant="outline" className="w-full sm:w-auto gap-2"><Play className="h-4 w-4" /> Live Demo — Super Admin</Button></Link>
            </div>
            <div className="mt-4 text-xs text-zinc-500">No credit card for trial • Cancel anytime • Includes onboarding</div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-500">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Razorpay • UPI • Cards</span>
              <span className="flex items-center gap-1.5"><Lock className="h-4 w-4" /> GST • e-Invoice • e-Way Ready</span>
              <span className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> AWS Mumbai • Data stays in India</span>
            </div>
          </div>

          {/* Dashboard preview */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-12 mx-auto max-w-[1080px]">
            <div className="rounded-2xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 border-b bg-zinc-50 px-4 py-3">
                <div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
                <span className="ml-3 text-xs font-mono text-zinc-500">app.mathipi.in — Super Admin Command Center</span>
                <span className="ml-auto hidden sm:flex items-center gap-1.5 text-xs"><span className="h-2 w-2 rounded-full bg-emerald-500" /> All systems operational</span>
              </div>
              <div className="grid md:grid-cols-[240px_1fr] min-h-[420px]">
                <div className="hidden md:block border-r bg-zinc-50 p-4 space-y-4">
                  <div className="space-y-1">
                    <div className="h-8 rounded bg-zinc-900 text-white flex items-center px-3 text-xs font-semibold">⚡ Billing — 8-sec</div>
                    <div className="h-8 rounded hover:bg-white border border-transparent hover:border-zinc-200 flex items-center px-3 text-xs">📦 Inventory • 4,212 SKUs</div>
                    <div className="h-8 rounded hover:bg-white border border-transparent hover:border-zinc-200 flex items-center px-3 text-xs">🧠 AI Agents • 7 running</div>
                    <div className="h-8 rounded hover:bg-white border border-transparent hover:border-zinc-200 flex items-center px-3 text-xs">🚚 Delivery • 3 trips</div>
                  </div>
                  <Card className="bg-orange-500 text-white border-orange-500">
                    <CardContent className="p-3">
                      <div className="text-xs font-bold">Plan: Enterprise</div>
                      <div className="text-[11px] opacity-90">All 35 modules • Unlimited</div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/30 overflow-hidden"><div className="h-full w-[68%] bg-white" /></div>
                      <div className="text-[10px] mt-1 opacity-80">68% of quota • Renews 09 Sep</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="p-4 md:p-6 space-y-4 bg-[#FDFCF8]">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { k: "Today Revenue", v: "₹ 4,82,450", d: "+12.4%" },
                      { k: "Invoices", v: "127", d: "8-sec avg" },
                      { k: "Orders", v: "483", d: "All channels" },
                      { k: "Risk Score", v: "0.8 / 10", d: "No fraud today" },
                    ].map(c => (
                      <Card key={c.k} className="p-3">
                        <div className="text-[11px] font-semibold tracking-widest text-zinc-500">{c.k}</div>
                        <div className="text-xl font-bold">{c.v}</div>
                        <div className="text-xs text-emerald-600">{c.d}</div>
                      </Card>
                    ))}
                  </div>
                  <div className="grid lg:grid-cols-2 gap-4">
                    <Card><CardHeader className="pb-2"><div className="text-sm font-semibold">Live AI Agents</div></CardHeader><CardContent className="space-y-2">{AGENTS.slice(0, 3).map(a => (<div key={a.name} className="flex items-center justify-between text-xs border rounded-lg px-3 py-2 bg-white"><span className="font-medium">{a.name}</span><Badge variant={a.status === "Running" ? "success" : "secondary"}>{a.status}</Badge></div>))}</CardContent></Card>
                    <Card><CardHeader className="pb-2"><div className="text-sm font-semibold">Commercial Control Center</div></CardHeader><CardContent className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center justify-between border rounded-lg px-3 py-2"><span>Billing</span><span className="text-emerald-600 font-bold">● ON</span></div>
                      <div className="flex items-center justify-between border rounded-lg px-3 py-2"><span>Orders</span><span className="text-emerald-600 font-bold">● ON</span></div>
                      <div className="flex items-center justify-between border rounded-lg px-3 py-2 bg-red-50 border-red-200"><span>Phone AI</span><span className="text-zinc-500">PAUSED</span></div>
                      <div className="flex items-center justify-between border rounded-lg px-3 py-2"><span>Margin guard</span><span className="text-emerald-600">₹ 12%</span></div>
                    </CardContent></Card>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-zinc-500"><Star className="h-3.5 w-3.5 text-amber-500" /> Trusted by 4000+ customers • 5 branches • Salem HQ</div>
          </motion.div>
        </div>
      </section>

      {/* Social proof / stats */}
      <section className="border-b bg-zinc-900 text-white">
        <div className="mx-auto max-w-[1280px] px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: "8 sec", k: "Invoice creation" },
            { v: "50K+ SKUs", k: "Preloaded item library" },
            { v: "99.9%", k: "Uptime SLA" },
            { v: "₹ 0 fraud", k: "Last 30 days — AI blocked 23 spoofs" },
          ].map(s => (
            <div key={s.k}><div className="text-xl font-bold">{s.v}</div><div className="text-xs opacity-70">{s.k}</div></div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="mx-auto max-w-[1280px] px-4 py-14">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <Badge variant="secondary">LEGO-BLOCK MODULES</Badge>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Every feature is a module. <span className="text-orange-500">Pay only for what you use.</span></h2>
            <p className="mt-2 text-zinc-600 max-w-2xl">Unlock modules instantly — no rebuild, no migration. Enable, disable, bill per branch.</p>
          </div>
          <Link href="/dashboard/modules"><Button variant="outline" size="sm">Open Module Marketplace <ArrowRight className="h-3.5 w-3.5 ml-1" /></Button></Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULES.map(m => (
            <Card key={m.code} className={m.paid ? "border-orange-200 bg-orange-50/40" : ""}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="text-2xl">{m.icon}</div>
                  <Badge variant={m.status === "Enabled" ? "success" : "secondary"}>{m.status}</Badge>
                </div>
                <div className="mt-3 font-semibold text-sm leading-tight">{m.name}</div>
                <div className="text-xs text-zinc-500">{m.cat} • {m.code}</div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className={m.paid ? "font-semibold text-orange-600" : "text-zinc-600"}>{m.price}</span>
                  <span className="text-zinc-400">{m.paid ? "Included" : "Included"}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI Agents */}
      <section id="agents" className="bg-zinc-50 border-y">
        <div className="mx-auto max-w-[1280px] px-4 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Badge variant="outline" className="gap-1"><Cpu className="h-3 w-3" /> AI AGENT OS</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Hierarchy of agents. <br /> One human owner.</h2>
              <p className="mt-3 text-zinc-600">Master Meta-Agent orchestrates Business, Engineering, Operations. Each worker has budget, tools, guardrails — cannot post financial entries without approval.</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <Card className="p-4"><div className="text-2xl font-bold">1</div><div className="text-xs text-zinc-500">Human Owner</div></Card>
                <Card className="p-4"><div className="text-2xl font-bold">3</div><div className="text-xs text-zinc-500">Meta-Agents</div></Card>
                <Card className="p-4"><div className="text-2xl font-bold">20+</div><div className="text-xs text-zinc-500">Worker Agents</div></Card>
              </div>
              <div className="mt-6 flex gap-3">
                <Link href="/dashboard/agents"><Button size="sm" className="gap-1">Agent Control Center <ArrowRight className="h-3.5 w-3.5" /></Button></Link>
                <Badge variant="secondary" className="px-3">Daily budget ₹500/agent</Badge>
              </div>
            </div>
            <Card className="overflow-hidden">
              <CardHeader className="border-b bg-white"><div className="font-semibold text-sm flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-500" /> Live Agents</div></CardHeader>
              <CardContent className="p-0 divide-y">
                {AGENTS.map(a => (
                  <div key={a.name} className="flex items-center gap-3 p-3 text-sm">
                    <div className="h-8 w-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold">{a.level}</div>
                    <div className="flex-1">
                      <div className="font-medium leading-none">{a.name}</div>
                      <div className="text-xs text-zinc-500">{a.jobs} jobs • {a.workers} workers • ₹{a.cost}/₹{a.budget}</div>
                    </div>
                    <Badge variant={a.status === "Running" ? "success" : "secondary"}>{a.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-[1280px] px-4 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Plans for serious distribution.</h2>
          <p className="mt-3 text-zinc-600">All plans include GST billing, inventory, audit logs, cloud backup. Upgrade/downgrade instantly. 14-day free trial, no credit card.</p>
          <div className="mt-6 inline-flex items-center rounded-full border bg-zinc-50 p-1 text-sm">
            <button onClick={() => setAnnual(false)} className={`px-4 py-1.5 rounded-full ${!annual ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-1.5 rounded-full ${annual ? "bg-zinc-900 text-white" : "text-zinc-600"}`}>Annual <span className="ml-1 rounded-full bg-emerald-500 px-1.5 py-0.5 text-xs text-white">Save 17%</span></button>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map(p => (
            <Card key={p.id} className={`relative flex flex-col ${p.popular ? "border-orange-500 shadow-xl scale-[1.02]" : p.color}`}>
              {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">MOST POPULAR</div>}
              <CardHeader>
                <div className="text-lg font-bold">{p.name}</div>
                <div className="text-xs text-zinc-500">{p.description}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{formatCurrency(annual ? p.priceYearly : p.priceMonthly)}</span>
                  <span className="text-xs text-zinc-500">/{annual ? "year" : "month"} + GST</span>
                </div>
                {!annual && <div className="text-xs text-zinc-500">Billed monthly • Cancel anytime</div>}
                {annual && <div className="text-xs text-emerald-600 font-medium">Pay yearly, save {formatCurrency(p.priceMonthly * 12 - p.priceYearly)}</div>}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Link href={`/checkout?plan=${p.id}`} className="w-full"><Button variant={p.popular ? "secondary" : "default"} className="w-full">{p.cta}</Button></Link>
                <ul className="mt-6 space-y-2 text-sm flex-1">
                  {p.features.map(f => (<li key={f} className="flex gap-2"><Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" /> <span>{f}</span></li>))}
                </ul>
                <div className="mt-6 text-xs text-zinc-500 border-t pt-3">
                  <div className="font-medium text-zinc-700">Includes:</div>
                  <div>Cloud hosting, backups, SSL, GST updates, onboarding</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 mx-auto max-w-5xl grid md:grid-cols-3 gap-4 text-xs">
          <Card className="p-4 bg-zinc-50"><div className="font-semibold flex gap-2"><Shield className="h-4 w-4" /> Enterprise SLA</div><div className="text-zinc-600 mt-1">99.9% uptime, 4h support response, quarterly security audit, data localization (AWS Mumbai).</div></Card>
          <Card className="p-4 bg-zinc-50"><div className="font-semibold flex gap-2"><BarChart3 className="h-4 w-4" /> Usage-based overages</div><div className="text-zinc-600 mt-1">Beyond plan limits: ₹0.80/order, ₹2/SMS, WhatsApp at meta rates. No surprises.</div></Card>
          <Card className="p-4 bg-zinc-50"><div className="font-semibold flex gap-2"><Users className="h-4 w-4" /> White-label add-on</div><div className="text-zinc-600 mt-1">Your domain, logo, Play Store listing — ₹49,999 one-time (Enterprise).</div></Card>
        </div>

        <div className="mt-6 text-center text-xs text-zinc-500">Questions? Talk to founder on WhatsApp: +91 98765 43210 • All prices ex-GST • Razorpay, UPI, NEFT supported</div>
      </section>

      {/* Features grid */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-[1280px] px-4 py-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: <Zap className="h-5 w-5" />, t: "8-Second Billing", d: "Fastest GST invoice in India — HSN auto, e-Invoice, e-Way, print & share." },
            { icon: <Shield className="h-5 w-5" />, t: "Fraud-proof Collections", d: "UTR duplicate check, screenshot OCR, cash denomination, GPS spoof detection." },
            { icon: <TrendingUp className="h-5 w-5" />, t: "Order Control Engine", d: "Central ATS (Physical-Reserved-Blocked), hierarchical blocking, margin protection." },
            { icon: <Package className="h-5 w-5" />, t: "Multi-Godown + FEFO", d: "Batch, expiry, barcode, 50K+ SKU library." },
            { icon: <Truck className="h-5 w-5" />, t: "Delivery OTP + POD", d: "Route optimization, OTP verify, photo + GPS + cash collection." },
            { icon: <Phone className="h-5 w-5" />, t: "WhatsApp & Phone AI", d: "Conversational ordering — AI takes orders, human approves invoices." },
          ].map(f => (
            <div key={f.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="h-9 w-9 rounded-full bg-orange-500 flex items-center justify-center">{f.icon}</div>
              <div className="mt-3 font-semibold">{f.t}</div>
              <div className="text-sm opacity-70">{f.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1280px] px-4 py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { q: "We closed month-end 3 days early. Billing is insanely fast, and fraud alerts saved ₹1.2L.", n: "R. Kumar — SKS Distributors, Salem", s: "Enterprise • 5 branches" },
            { q: "Growth plan = perfect. Our 12 salesmen stopped faking visits after GPS + 15-min stay detection.", n: "Anita — Best Super, Erode", s: "Growth • Field Intelligence" },
            { q: "Started on Starter, upgraded to Growth in a week. OTP delivery + cash tracking is gold.", n: "M. Selvam — Namakkal Traders", s: "Growth • Delivery" },
          ].map(t => (
            <Card key={t.n} className="p-5">
              <Quote className="h-5 w-5 text-orange-500" />
              <div className="mt-3 text-sm font-medium">"{t.q}"</div>
              <div className="mt-3 text-xs font-semibold">{t.n}</div>
              <div className="text-xs text-zinc-500">{t.s}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-zinc-50">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h3 className="text-2xl font-bold">FAQs</h3>
          <div className="mt-6 space-y-3">
            {[
              { q: "What's the difference between free and paid?", a: "Includes field ops, AI agents, delivery OTP, advanced fraud, white-label, unlimited branches/orders, and SLA support. Free is limited to single branch billing demo." },
              { q: "Can I switch plans later?", a: "Yes — upgrade/downgrade instantly. Pro-rated billing via Razorpay. Your data stays." },
              { q: "Is my data safe & compliant?", a: "Data stays in AWS Mumbai (data localization), encrypted at rest (AES-256), TLS 1.3, immutable audit logs, DPDP Act 2023 ready." },
              { q: "Do you handle GST e-Invoice/e-Way?", a: "Yes — via ClearTax/Masters India GSP. Auto IRN, QR, and e-Way for >₹50K movements." },
            ].map(f => (
              <details key={f.q} className="group rounded-xl border bg-white p-4 open:shadow">
                <summary className="flex items-center justify-between cursor-pointer font-medium text-sm list-none">{f.q} <ChevronDown className="h-4 w-4 transition group-open:rotate-180" /></summary>
                <div className="mt-2 text-sm text-zinc-600">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/checkout?plan=growth"><Button variant="secondary">Start Trial — Growth</Button></Link>
            <Link href="/dashboard"><Button variant="outline">Explore Dashboard Demo</Button></Link>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-[1280px] px-4">
          <div className="font-semibold text-zinc-700">Mathi PI OS • August 2026</div>
          <div className="mt-1">Made for Indian distribution • Tamil Nadu • GST • UPI • Razorpay • MapmyIndia • MSG91 • Gupshup</div>
          <div className="mt-2 flex items-center justify-center gap-4"><a href="#" className="underline">Terms</a><a href="#" className="underline">Privacy (DPDP)</a><a href="#" className="underline">Refund Policy</a><a href="#" className="underline">Contact</a></div>
        </div>
      </footer>
    </div>
  )
}

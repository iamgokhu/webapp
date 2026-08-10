"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { TEMPLATES, type PaperSize, type InvoiceTheme } from "@/lib/invoice-templates"
import { InvoicePreview } from "@/components/invoice-preview"
import { Printer, FileText, Eye, Settings2, Download, Sparkles } from "lucide-react"
import Link from "next/link"

export default function InvoiceTemplatesPage() {
  const [theme, setTheme] = useState<InvoiceTheme>("plain")
  const [size, setSize] = useState<PaperSize>("A4")
  const [scale, setScale] = useState(0.55)

  const current = TEMPLATES.find(t => t.id === theme) || TEMPLATES[0]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2"><FileText className="h-5 w-5 text-orange-500" /> Invoice Templates — SRS MART <Badge>Paid • A4 / A5</Badge></h1>
          <p className="text-xs text-zinc-600">Choose your bill design — like your 5 SRS MART samples. A4 for laser, A5 for thermal/dot-matrix. Each theme keeps same GST data, only look changes. Print-ready 300 DPI.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/billing"><Button variant="outline" size="sm">← Back to Billing — 8sec</Button></Link>
          <Button variant="secondary" size="sm" className="gap-1" onClick={() => window.print()}><Printer className="h-3.5 w-3.5" /> Print {size}</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[340px_1fr] gap-6">
        {/* left: gallery */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <span className="font-semibold text-sm flex items-center gap-2"><Settings2 className="h-4 w-4" /> Template Gallery</span>
              <Badge variant="secondary">{TEMPLATES.length} themes</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2 text-xs">
                <Button size="sm" variant={size === "A4" ? "secondary" : "outline"} className="flex-1" onClick={() => setSize("A4")}>A4 — 210×297mm</Button>
                <Button size="sm" variant={size === "A5" ? "secondary" : "outline"} className="flex-1" onClick={() => setSize("A5")}>A5 — 148×210mm</Button>
              </div>
              <div className="flex gap-2 text-xs">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => setScale(s => Math.max(0.35, s - 0.05))}>− Zoom</Button>
                <div className="flex-1 grid place-items-center border rounded-lg bg-zinc-50 text-xs">{Math.round(scale * 100)}%</div>
                <Button size="sm" variant="outline" className="flex-1" onClick={() => setScale(s => Math.min(0.85, s + 0.05))}>+ Zoom</Button>
              </div>
              <div className="text-xs text-zinc-600">All templates are <b>A4 + A5 compatible</b>. Boats/Lakshmi are A4-only for best watermark. Plain & Jagannath work on both.</div>
            </CardContent>
          </Card>

          <div className="grid gap-3">
            {TEMPLATES.map(t => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`text-left rounded-2xl border p-3 transition ${theme === t.id ? "border-orange-500 bg-orange-50" : "border-zinc-200 bg-white hover:bg-zinc-50"}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-semibold leading-tight">{t.name}</div>
                  <Badge variant={theme === t.id ? "success" : "secondary"} className="shrink-0">{t.paper.join("/")}</Badge>
                </div>
                <div className="text-xs text-zinc-600 mt-1">{t.description}</div>
                <div className="mt-2 flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-zinc-100 border">{t.category}</span>
                  <span className="text-zinc-500">Watermark: {t.watermark}</span>
                  {theme === t.id && <span className="ml-auto text-orange-600 font-bold flex items-center gap-1"><Eye className="h-3 w-3" /> Previewing</span>}
                </div>
              </button>
            ))}
          </div>

          <Card className="p-3 bg-amber-50 border-amber-200">
            <div className="text-xs font-bold text-amber-700 flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> Pro Tip</div>
            <div className="text-xs text-zinc-700 mt-1">Use <b>Plain</b> for fastest laser print, <b>Lakshmi/Jagannath</b> for festival season, <b>Boats</b> for daily. All are GST + E-way + QR compatible. Saved per branch.</div>
          </Card>
        </div>

        {/* right: preview */}
        <div className="space-y-3">
          <Card className="sticky top-6">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div className="font-semibold text-sm">Live Preview — {current.name} • {size} {theme !== "plain" && `• ${current.watermark} watermark`}</div>
              <div className="flex gap-2">
                <Badge variant="outline">{size} {size === "A4" ? "• 1 page" : "• Compact"}</Badge>
                <Badge variant="success">300 DPI Print-Ready</Badge>
              </div>
            </CardHeader>
            <CardContent className="bg-zinc-50 p-4 overflow-auto max-h-[820px] grid place-items-start">
              <div className="mx-auto w-full flex justify-center">
                <InvoicePreview theme={theme} size={size} scale={scale} />
              </div>
            </CardContent>
            <div className="px-6 pb-4 flex flex-wrap gap-2 text-xs">
              <Button size="sm" variant="secondary" onClick={() => window.print()}><Printer className="h-3.5 w-3.5 mr-1" /> Print {size} — {current.name}</Button>
              <Button size="sm" variant="outline"><Download className="h-3.5 w-3.5 mr-1" /> Download PDF</Button>
              <Button size="sm" variant="outline" onClick={() => alert(`Saved ${current.name} + ${size} as default for Salem HQ (A4/A5). Billing will use this.`)}>Save as Default</Button>
              <span className="ml-auto text-zinc-500 hidden sm:inline">A4: 210×297mm • A5: 148×210mm • Margins 4mm • 300 DPI</span>
            </div>
          </Card>

          <Card className="p-4">
            <div className="font-semibold text-sm">Invoice Settings — A4/A5 Model</div>
            <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <label className="space-y-1"><span className="font-medium">Paper</span><select value={size} onChange={e => setSize(e.target.value as any)} className="w-full rounded-xl border px-3 py-2 bg-white"><option>A4</option><option>A5</option></select></label>
              <label className="space-y-1"><span className="font-medium">Copies</span><select className="w-full rounded-xl border px-3 py-2 bg-white"><option>Original for Recipient</option><option>Duplicate — Transporter</option><option>Triplicate — Supplier</option></select></label>
              <label className="space-y-1"><span className="font-medium">QR / UPI</span><select className="w-full rounded-xl border px-3 py-2 bg-white"><option>Show — srsmart@dbs</option><option>Hide</option></select></label>
              <label className="space-y-1"><span className="font-medium">Signature</span><select className="w-full rounded-xl border px-3 py-2 bg-white"><option>Show S. Gujy</option><option>Hide</option></select></label>
            </div>
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-xs">
              <label className="flex items-center gap-2 border rounded-xl px-3 py-2"><input type="checkbox" defaultChecked /> <span>Show HSN / SAC</span></label>
              <label className="flex items-center gap-2 border rounded-xl px-3 py-2"><input type="checkbox" defaultChecked /> <span>Show Discount %</span></label>
              <label className="flex items-center gap-2 border rounded-xl px-3 py-2"><input type="checkbox" defaultChecked /> <span>Show Bank Details</span></label>
              <label className="flex items-center gap-2 border rounded-xl px-3 py-2"><input type="checkbox" defaultChecked /> <span>Show Terms & Conditions</span></label>
            </div>
            <div className="mt-3 text-xs text-zinc-500">All settings are per-branch and A4/A5 independent. Change theme without re-creating invoices — past invoices keep their theme.</div>
          </Card>
        </div>
      </div>
    </div>
  )
}

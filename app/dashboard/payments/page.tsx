"use client"
import { Card, CardContent, CardHeader, Badge, Button } from "@/components/ui"
import { formatCurrency } from "@/lib/utils"
import { useState } from "react"
import { Upload, CheckCircle2, AlertTriangle, Search, ShieldCheck } from "lucide-react"

export default function PaymentsPage() {
  const [utr, setUtr] = useState("UTR-9823749821")
  const [verified, setVerified] = useState<boolean | null>(null)
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-white">Payments — Ledger & UTR Verification <Badge variant="success">Paid: Auto-match + OCR</Badge></h1>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">UTR Verification — Multi-factor</div><div className="text-xs text-zinc-400">Prevents reuse, amount mismatch, fake screenshot.</div></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <input value={utr} onChange={e=>setUtr(e.target.value)} placeholder="Enter UTR / Ref No" className="flex-1 rounded-xl border px-3 py-2 bg-zinc-900 font-mono text-sm" />
              <Button size="sm" onClick={()=>{
                // naive duplicate check demo
                if (utr.includes("9823749821")) setVerified(false); else setVerified(true);
                setTimeout(()=>setVerified(utr.length>6), 300)
              }}><ShieldCheck className="h-4 w-4 mr-1" /> Verify</Button>
            </div>
            {verified===true && <div className="rounded-xl bg-orange-950/30 border border-orange-800 p-3 text-sm flex gap-2"><CheckCircle2 className="h-4 w-4 text-orange-500" /> UTR verified • Amount ₹12,400 matches bank statement • Not duplicate.</div>}
            {verified===false && <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm flex gap-2"><AlertTriangle className="h-4 w-4 text-red-600" /> Duplicate UTR — already used for INV-1840. Blocked.</div>}
            <div className="rounded-xl border p-3 text-xs space-y-2">
              <div className="font-semibold">Upload payment screenshot (OCR)</div>
              <div className="flex gap-2"><Button variant="outline" size="sm" className="gap-1"><Upload className="h-3.5 w-3.5" /> Upload Image</Button><span className="text-zinc-400">Claude Vision extracts UTR, amount, date — cross-checked with statement.</span></div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2"><div className="font-semibold text-sm">Auto Invoice Matching — Oldest First</div></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="rounded-xl border p-3 flex justify-between"><span>Payment: ₹25,000 — SKS Traders (UPI)</span><Badge variant="success">Matched</Badge></div>
            <div className="pl-4 border-l space-y-1 text-xs">
              <div className="flex justify-between"><span>INV-1841 — ₹12,400</span><span className="font-bold text-orange-500">✓ Fully paid</span></div>
              <div className="flex justify-between"><span>INV-1839 — ₹12,600 of ₹35,600</span><span className="font-bold">Partial</span></div>
            </div>
            <div className="text-xs text-zinc-400">Cheque tracking: Issued → Deposited → Cleared / Bounced (paid).</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2"><div className="font-semibold text-sm flex items-center gap-2"><Search className="h-4 w-4" /> Party Ledger & Aging</div></CardHeader>
        <CardContent className="space-y-2 text-sm">
          {[
            { id: "INV-1841 • SKS", amt: 12400, due: "2026-08-05", days: 5, status: "OVERDUE" },
            { id: "INV-1839 • SKS", amt: 23100, due: "2026-08-15", days: -5, status: "PENDING" },
          ].map(r=>(
            <div key={r.id} className="flex items-center justify-between rounded-xl border px-3 py-2">
              <div><div className="font-medium text-xs">{r.id}</div><div className="text-xs text-zinc-400">Due {r.due} • {r.days>0?`${r.days} days overdue`:`Due in ${Math.abs(r.days)} days`}</div></div>
              <div className="text-right"><div className="font-bold">{formatCurrency(r.amt)}</div><Badge variant={r.status==="OVERDUE"?"warning":"secondary"}>{r.status}</Badge></div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

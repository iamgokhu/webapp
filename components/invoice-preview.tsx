"use client"
import { SAMPLE_INVOICE } from "@/lib/invoice-templates"
import type { InvoiceTheme, PaperSize } from "@/lib/invoice-templates"

function money(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(n)
}

export function InvoicePreview({ theme, size, scale = 1 }: { theme: InvoiceTheme; size: PaperSize; scale?: number }) {
  const isA5 = size === "A5"
  const s = SAMPLE_INVOICE
  // watermark visuals per theme
  const bgClass =
    theme === "plain" || theme === "srs-gold" ? "bg-white" :
    theme === "boats" ? "bg-[#FFFBF0]" :
    theme === "jagannath" ? "bg-[#FFF7ED]" :
    "bg-[#FFF7F5]"

  const watermark =
    theme === "boats" ? "⛵ ⛵ ⛵" :
    theme === "jagannath" ? "🛕" :
    theme === "lakshmi" ? "🌸" : ""

  return (
    <div
      className={`relative mx-auto overflow-hidden border border-zinc-300 shadow-lg ${bgClass} text-[7px] leading-[1.2] text-zinc-900`}
      style={{
        width: isA5 ? `${148 * scale}mm` : `${210 * scale}mm`,
        minHeight: isA5 ? `${210 * scale}mm` : `${297 * scale}mm`,
        maxWidth: "100%",
      }}
    >
      {/* watermark */}
      {watermark && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-[0.06] select-none">
          <div className="text-[120px] leading-none">{watermark}</div>
        </div>
      )}
      {theme === "lakshmi" && (
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #f43f5e 1px, transparent 1px), radial-gradient(circle at 80% 40%, #f97316 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      )}
      {theme === "jagannath" && (
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[38%] opacity-[0.08]" style={{ background: "repeating-linear-gradient(90deg, #fb923c 0 2px, transparent 2px 40px)" }} />
      )}
      {theme === "boats" && (
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-[28%] opacity-[0.07] flex items-end justify-around text-[28px]">⛵ ⛵ ⛵ ⛵</div>
      )}

      <div className="relative p-[4mm]">
        {/* header */}
        <div className="flex items-start justify-between border border-zinc-900 p-[2mm] bg-white/90">
          <div className="flex gap-2">
            <div className="h-[10mm] w-[10mm] border border-zinc-900 grid place-items-center font-black text-[8px] leading-none">SRS<br />MART</div>
            <div className="leading-tight">
              <div className="font-black text-[9px] text-amber-700">SRS MART</div>
              <div className="text-[5.5px] max-w-[70mm]">{s.org.addr}</div>
              <div className="text-[5.5px]">GSTIN: {s.org.gstin} &nbsp; Mobile: {s.org.mobile} &nbsp; PAN: {s.org.pan}</div>
              <div className="text-[5.5px]">Online Store: {s.org.store}</div>
            </div>
          </div>
          <div className="text-right text-[6px] leading-tight">
            <div className="font-bold">Invoice No. <span className="font-mono">{s.invoice.no}</span></div>
            <div>Invoice Date <span className="font-mono">{s.invoice.date}</span> &nbsp; Due Date <span className="font-mono">{s.invoice.due}</span></div>
            <div>Vehicle No. {s.invoice.vehicle} &nbsp; E-way Bill No. {s.invoice.eway}</div>
          </div>
        </div>
        <div className="text-[5.5px] text-center border-x border-b border-zinc-900 py-[1mm] bg-zinc-50">TAX INVOICE <span className="ml-2 border px-1">ORIGINAL FOR RECIPIENT</span></div>

        {/* bill to / ship to */}
        <div className="grid grid-cols-2 border-x border-zinc-900 text-[6px]">
          <div className="border-r border-zinc-900 p-[2mm]">
            <div className="font-bold">BILL TO</div>
            <div className="font-bold uppercase">{s.billTo.name}</div>
            <div>Address: {s.billTo.addr}</div>
            <div>Mobile: {s.billTo.mobile} &nbsp; GSTIN: {s.billTo.gstin}</div>
            <div>Place of Supply: {s.invoice.placeOfSupply}</div>
          </div>
          <div className="p-[2mm]">
            <div className="text-[5px]">Address: 1234123 324324234, Bengaluru,</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div>Vehicle No. {s.invoice.vehicle}</div>
              <div>E-way Bill No. {s.invoice.eway}</div>
            </div>
          </div>
        </div>

        {/* items */}
        <table className="w-full border border-zinc-900 text-[6px] mt-[2mm]">
          <thead>
            <tr className="bg-zinc-900 text-white">
              <th className="border-r border-zinc-700 px-1 py-1">S.NO.</th>
              <th className="border-r border-zinc-700 px-1 py-1 text-left">ITEMS</th>
              <th className="border-r border-zinc-700 px-1 py-1">HSN</th>
              <th className="border-r border-zinc-700 px-1 py-1">DISC</th>
              <th className="border-r border-zinc-700 px-1 py-1">QTY.</th>
              <th className="border-r border-zinc-700 px-1 py-1">RATE</th>
              <th className="border-r border-zinc-700 px-1 py-1">DISC.</th>
              <th className="border-r border-zinc-700 px-1 py-1">TAX</th>
              <th className="px-1 py-1">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {s.items.map(r => (
              <tr key={r.s} className="border-t border-zinc-300">
                <td className="border-r px-1 py-1 text-center">{r.s}</td>
                <td className="border-r px-1 py-1">{r.name}</td>
                <td className="border-r px-1 py-1 text-center">{r.hsn}</td>
                <td className="border-r px-1 py-1 text-center">{r.disc}</td>
                <td className="border-r px-1 py-1 text-center">{r.qty}</td>
                <td className="border-r px-1 py-1 text-right">{money(r.rate)}</td>
                <td className="border-r px-1 py-1 text-right">{money(r.discAmt)}</td>
                <td className="border-r px-1 py-1 text-right">{money(r.taxAmt)}</td>
                <td className="px-1 py-1 text-right font-bold">{money(r.amount)}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-zinc-900 bg-zinc-50 font-bold">
              <td colSpan={4} className="px-1 py-1 text-right">TOTAL</td>
              <td className="border-l px-1 py-1 text-center">{s.totals.qty}</td>
              <td></td>
              <td className="px-1 py-1 text-right">₹ {money(s.totals.taxable)}</td>
              <td className="px-1 py-1 text-right">₹ {money(s.totals.tax)}</td>
              <td className="px-1 py-1 text-right">₹ {money(s.totals.total)}</td>
            </tr>
          </tbody>
        </table>

        <div className="border-x border-b border-zinc-900 p-[1mm] text-[6px] flex justify-between">
          <span>Received Amount: ₹ {s.totals.received}</span>
          <span>Notes: Sample Note</span>
        </div>

        {/* bank + qr + terms */}
        <div className="grid grid-cols-4 border border-zinc-900 mt-[2mm] text-[5.5px]">
          <div className="border-r p-[1.5mm]">
            <div className="font-bold border-b pb-1 mb-1">Bank Details</div>
            <div>Name: {s.bank.name}</div>
            <div>IFSC: {s.bank.ifsc}</div>
            <div>Account: {s.bank.ac}</div>
            <div>Bank: {s.bank.bank}</div>
          </div>
          <div className="border-r p-[1.5mm] text-center">
            <div className="font-bold">Payment QR Code</div>
            <div className="text-[5px]">PhonePe / Google Pay / PayTM<br />UPI ID: {s.qr.upi}</div>
            <div className="mx-auto mt-1 h-[14mm] w-[14mm] border-2 border-dashed grid place-items-center text-[5px]">QR</div>
          </div>
          <div className="border-r p-[1.5mm]">
            <div className="font-bold">Terms and Conditions</div>
            <div>1. Goods once sold will not be taken back or exchanged</div>
            <div>2. All disputes are subject to [Tiruchengode] jurisdiction only</div>
            <div>3. Cheque Bounce Charges Rs.500/-</div>
          </div>
          <div className="p-[1.5mm] flex flex-col justify-between text-center">
            <div className="font-mono text-[10px] italic">S. Gujy</div>
            <div className="text-[5px] border-t pt-1">Authorised Signatory For<br /><b>SRS MART</b></div>
            <div className="mt-2 border-t pt-1 text-[5px]">Receiver's Signature</div>
          </div>
        </div>
      </div>
    </div>
  )
}

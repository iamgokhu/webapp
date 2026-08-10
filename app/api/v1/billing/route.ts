import { NextRequest, NextResponse } from "next/server"
import { getInvoices, addInvoice, checkATS } from "@/lib/db"
import { redisGet, redisSet, redisDelPrefix } from "@/lib/redis"

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const search = url.searchParams.get("search")?.toLowerCase() || ""
  const cachedKey = `billing:list:${search}`
  const cached = redisGet(cachedKey)
  if (cached) {
    return NextResponse.json({ ...cached, cached: true, source: "Redis" })
  }

  // Simulate Postgres query with index
  const start = Date.now()
  let invoices = getInvoices()
  if (search) {
    invoices = invoices.filter(i => i.party.toLowerCase().includes(search) || i.id.toLowerCase().includes(search))
  }
  // Simulate order by date desc
  const ms = Date.now() - start

  const totalSales = 102979833.54
  const paid = 18384967.38
  const unpaid = 84594866.16

  const data = {
    invoices: invoices.slice(0, 50),
    stats: { totalSales, paid, unpaid, cancelled: 0, count: invoices.length },
    meta: { queryMs: ms, source: "Postgres (PostGIS indexed)", cached: false },
  }

  redisSet(cachedKey, data, 5000)
  // Add artificial delay to show caching benefit? No, keep fast
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { party, items, invoiceNo, prefix, amount, gst } = body

  if (!party || !items || items.length === 0) {
    return NextResponse.json({ error: "Party and items required" }, { status: 400 })
  }

  // Order Control Engine — ATS validation
  for (const it of items) {
    const check = checkATS(it.sku, it.qty)
    if (!check.ok) {
      return NextResponse.json({ error: `ATS block: ${it.name} — ${check.reason}`, code: "ATS_BLOCKED" }, { status: 409 })
    }
    // Margin protection — sale must be >= 85% of mrp? simple
    if (it.sale < it.mrp * 0.85) {
      return NextResponse.json({ error: `Margin protection: ${it.name} below 15% margin`, code: "MARGIN_BLOCKED" }, { status: 409 })
    }
  }

  const id = `${prefix || "SRS/"}${invoiceNo || Math.floor(10000 + Math.random() * 90000)}`
  const inv = {
    id,
    date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    party: party.name || party,
    dueIn: "4 Days",
    amount: Math.round(amount || 0),
    unpaid: Math.round(amount || 0),
    status: "Unpaid",
    items: items.length,
    gst: Math.round(gst || 0),
    createdAt: new Date().toISOString(),
  }

  addInvoice(inv)
  redisDelPrefix("billing:list:")

  // Simulate e-Invoice IRN generation async (GSP)
  const irn = `IRN-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`

  return NextResponse.json({ ok: true, invoice: inv, irn, atsValidated: true, marginOk: true })
}

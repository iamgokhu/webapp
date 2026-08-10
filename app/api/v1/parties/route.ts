import { NextResponse } from "next/server"
import { getParties } from "@/lib/db"
import { redisGet, redisSet } from "@/lib/redis"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get("q")?.toLowerCase() || ""
  const key = `parties:${q}`
  const cached = redisGet(key)
  if (cached) return NextResponse.json({ ...cached, cached: true })

  let parties = getParties()
  if (q) parties = parties.filter(p => p.name.toLowerCase().includes(q) || p.gstin.toLowerCase().includes(q))
  const data = { parties, count: parties.length, source: "Postgres" }
  redisSet(key, data, 10000)
  return NextResponse.json(data)
}

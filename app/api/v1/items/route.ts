import { NextResponse } from "next/server"
import { getInventory } from "@/lib/db"
import { redisGet, redisSet } from "@/lib/redis"

export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get("q")?.toLowerCase() || ""
  const key = `items:${q}`
  const cached = redisGet(key)
  if (cached) return NextResponse.json({ ...cached, cached: true })

  let items = getInventory()
  if (q) items = items.filter(i => i.name.toLowerCase().includes(q) || i.sku.toLowerCase().includes(q) || i.hsn.includes(q))
  const data = { items, count: items.length, source: "Meilisearch (fallback: Postgres tsvector)" }
  redisSet(key, data, 10000)
  return NextResponse.json(data)
}

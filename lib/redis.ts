const cache = new Map<string, { v: any; exp: number }>()

export function redisGet(key: string) {
  const c = cache.get(key)
  if (!c) return null
  if (Date.now() > c.exp) {
    cache.delete(key)
    return null
  }
  return c.v
}

export function redisSet(key: string, v: any, ttlMs = 5000) {
  cache.set(key, { v, exp: Date.now() + ttlMs })
}

export function redisDel(key: string) {
  cache.delete(key)
}

export function redisDelPrefix(prefix: string) {
  Array.from(cache.keys()).forEach(k => { if (k.startsWith(prefix)) cache.delete(k) })
}

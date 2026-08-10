import { SALES_INVOICES, PARTIES, INVENTORY } from "./data"
import fs from "fs"
import path from "path"

const DB_PATH = "/tmp/mathi_db.json"

type DB = {
  invoices: typeof SALES_INVOICES
  parties: typeof PARTIES
  inventory: typeof INVENTORY
}

function initDB(): DB {
  if (fs.existsSync(DB_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"))
    } catch {}
  }
  const db: DB = {
    invoices: [...SALES_INVOICES],
    parties: [...PARTIES],
    inventory: [...INVENTORY],
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2))
  return db
}

let db: DB | null = null
function getDB(): DB {
  if (!db) db = initDB()
  return db
}

export function getInvoices() {
  return getDB().invoices
}

export function addInvoice(inv: any) {
  const d = getDB()
  d.invoices.unshift(inv)
  fs.writeFileSync(DB_PATH, JSON.stringify(d, null, 2))
  return inv
}

export function getParties() {
  return getDB().parties
}

export function getInventory() {
  return getDB().inventory
}

// Order Control Engine — ATS check
export function checkATS(sku: string, qty: number, godown = "Salem-A") {
  const item = getDB().inventory.find(i => i.sku === sku)
  if (!item) return { ok: false, reason: "SKU not found" }
  if (item.ats < qty) return { ok: false, reason: `ATS ${item.ats} < qty ${qty}`, ats: item.ats }
  return { ok: true, ats: item.ats }
}

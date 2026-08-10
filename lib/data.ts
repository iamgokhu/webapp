export const PLANS = [
  {
    id: "starter" as const,
    name: "Starter",
    priceMonthly: 4999,
    priceYearly: 49990,
    description: "For single-branch distributors getting started",
    cta: "Start with Starter",
    popular: false,
    features: ["1 Branch", "2,000 orders/mo", "Billing + Inventory + Parties", "GST Invoices & e-Way", "WhatsApp notifications", "Email support", "5 staff users"],
    limitations: ["No AI agents", "No field intelligence", "Community support only"],
    color: "border-zinc-200",
  },
  {
    id: "growth" as const,
    name: "Growth",
    priceMonthly: 14999,
    priceYearly: 149990,
    description: "For scaling teams with field sales & delivery",
    cta: "Go Growth",
    popular: true,
    features: ["5 Branches", "15,000 orders/mo", "Everything in Starter", "HRMS + Attendance + GPS", "Field Intelligence + Delivery OTP", "AI Sales Assistant (WhatsApp)", "25 staff users", "Priority support"],
    limitations: [],
    color: "border-orange-400",
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    priceMonthly: 39999,
    priceYearly: 399990,
    description: "Full AI-OS — autonomous operations at scale",
    cta: "Unlock Enterprise",
    popular: false,
    features: ["Unlimited branches", "Unlimited orders", "All 35+ modules", "Full AI Agent OS (Master + 20 agents)", "Fraud & Risk Engine + OCR", "Phone AI + Telegram Mini Apps", "White-label + API access", "Dedicated success manager"],
    limitations: [],
    color: "border-zinc-900",
  },
]

export const MODULES = [
  { code: "core-auth", name: "Authentication", cat: "Core", status: "Enabled", icon: "🔐", price: "Included", paid: false },
  { code: "billing", name: "Billing — 8-sec Invoice", cat: "Commerce", status: "Enabled", icon: "⚡", price: "Included", paid: false },
  { code: "inventory", name: "Inventory & Stock", cat: "Commerce", status: "Enabled", icon: "📦", price: "Included", paid: false },
  { code: "order-control", name: "Order Control Engine", cat: "Commerce", status: "Enabled", icon: "🛡️", price: "Included", paid: false },
  { code: "payments", name: "Payments & Ledger", cat: "Commerce", status: "Enabled", icon: "💳", price: "Included", paid: false },
  { code: "ecommerce", name: "E-commerce B2C/B2B", cat: "Commerce", status: "Enabled", icon: "🛒", price: "Growth+", paid: true },
  { code: "delivery", name: "Delivery & OTP", cat: "Workforce", status: "Enabled", icon: "🚚", price: "Growth+", paid: true },
  { code: "hrms", name: "HRMS & Attendance", cat: "Workforce", status: "Enabled", icon: "👥", price: "Growth+", paid: true },
  { code: "field-intel", name: "Field Intelligence", cat: "Workforce", status: "Enabled", icon: "🛰️", price: "Growth+", paid: true },
  { code: "ai-orchestrator", name: "AI Orchestrator", cat: "AI", status: "Enabled", icon: "🧠", price: "Enterprise", paid: true },
  { code: "ai-whatsapp", name: "WhatsApp AI Agent", cat: "AI", status: "Enabled", icon: "💬", price: "Growth+", paid: true },
  { code: "ai-phone", name: "Phone AI — Voice Ordering", cat: "AI", status: "Disabled", icon: "📞", price: "₹8,000/mo", paid: true },
  { code: "ai-ocr", name: "OCR — Bills & Payments", cat: "AI", status: "Enabled", icon: "👁️", price: "Growth+", paid: true },
  { code: "ai-fraud", name: "Fraud & Risk Engine", cat: "AI", status: "Enabled", icon: "🚨", price: "Enterprise", paid: true },
  { code: "telegram", name: "Telegram Platform", cat: "Integrations", status: "Enabled", icon: "✈️", price: "Growth+", paid: true },
  { code: "digital-sevai", name: "Digital Sevai", cat: "Services", status: "Disabled", icon: "🏛️", price: "₹4,999/mo", paid: true },
  { code: "reports", name: "Reports & GSTR", cat: "Ops", status: "Enabled", icon: "📊", price: "Included", paid: false },
  { code: "audit", name: "Audit Logs", cat: "Ops", status: "Enabled", icon: "📝", price: "Included", paid: false },
]

export const AGENTS = [
  { name: "Master Meta-Agent", level: "L1", status: "Running", jobs: 842, cost: 182, budget: 500, workers: 1 },
  { name: "Sales Meta-Agent", level: "L2", status: "Running", jobs: 1240, cost: 94, budget: 300, workers: 4 },
  { name: "Order Agent", level: "L3", status: "Running", jobs: 523, cost: 42, budget: 150, workers: 3 },
  { name: "Collection Agent", level: "L3", status: "Running", jobs: 312, cost: 38, budget: 120, workers: 2 },
  { name: "Route Agent", level: "L3", status: "Running", jobs: 189, cost: 21, budget: 100, workers: 2 },
  { name: "Fraud Detection Agent", level: "L3", status: "Running", jobs: 892, cost: 67, budget: 200, workers: 2 },
  { name: "Campaign Agent", level: "L3", status: "Paused", jobs: 45, cost: 12, budget: 80, workers: 1 },
  { name: "Monitoring Agent", level: "L2", status: "Running", jobs: 2100, cost: 23, budget: 100, workers: 1 },
]

export const INVENTORY = [
  { sku: "SKU-8821", name: "Aashirvaad Atta 5kg", cat: "Kirana", mrp: 325, sale: 310, stock: 842, ats: 790, blocked: 12, godown: "Salem-A" },
  { sku: "SKU-8822", name: "Fortune Refined Oil 1L", cat: "Edible Oil", mrp: 145, sale: 138, stock: 412, ats: 380, blocked: 8, godown: "Salem-A" },
  { sku: "SKU-8823", name: "Tata Tea Premium 500g", cat: "Beverages", mrp: 285, sale: 272, stock: 120, ats: 45, blocked: 0, godown: "Erode" },
  { sku: "SKU-8824", name: "Surf Excel 2kg", cat: "Home Care", mrp: 420, sale: 398, stock: 234, ats: 210, blocked: 4, godown: "Salem-B" },
  { sku: "SKU-8825", name: "Parle-G 800g", cat: "Biscuits", mrp: 90, sale: 85, stock: 1200, ats: 1180, blocked: 0, godown: "Salem-A" },
]

export const PARTIES = [
  { name: "SKS Traders, Salem", type: "Retailer", tier: "Gold", balance: 48750, credit: 100000, status: "Approved" },
  { name: "Murugan Stores, Erode", type: "Wholesale", tier: "Platinum", balance: 124000, credit: 250000, status: "Approved" },
  { name: "Aavin Canteen, Namakkal", type: "Canteen", tier: "Silver", balance: 32000, credit: 75000, status: "Approved" },
  { name: "Priya Supermarket, Salem", type: "Supermarket", tier: "Diamond", balance: 89000, credit: 200000, status: "Pending" },
]

export const DELIVERIES = [
  { id: "TRIP-042", driver: "Kumar", orders: 14, route: "Salem → Omalur → Mettur", status: "In Transit", otp: "4821" },
  { id: "TRIP-043", driver: "Suresh", orders: 9, route: "Erode → Bhavani → Sathy", status: "Pending", otp: "—" },
  { id: "TRIP-044", driver: "Arun", orders: 22, route: "Salem City", status: "Delivered", otp: "Verified" },
]

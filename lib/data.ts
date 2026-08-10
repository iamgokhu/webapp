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
    color: "border-emerald-600",
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
  { code: "ai-phone", name: "Phone AI — Voice Ordering", cat: "AI", status: "Enabled", icon: "📞", price: "Included", paid: true },
  { code: "ai-ocr", name: "OCR — Bills & Payments", cat: "AI", status: "Enabled", icon: "👁️", price: "Growth+", paid: true },
  { code: "ai-fraud", name: "Fraud & Risk Engine", cat: "AI", status: "Enabled", icon: "🚨", price: "Enterprise", paid: true },
  { code: "telegram", name: "Telegram Platform", cat: "Integrations", status: "Enabled", icon: "✈️", price: "Growth+", paid: true },
  { code: "digital-sevai", name: "Digital Sevai", cat: "Services", status: "Enabled", icon: "🏛️", price: "Included", paid: true },
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
  { name: "Campaign Agent", level: "L3", status: "Running", jobs: 1245, cost: 67, budget: 200, workers: 12 },
  { name: "Monitoring Agent", level: "L2", status: "Running", jobs: 2100, cost: 23, budget: 100, workers: 1 },
]

export const INVENTORY = [
  { sku: "SKU-8821", name: "Aashirvaad Atta 5kg", cat: "Kirana", mrp: 325, sale: 310, stock: 842, ats: 790, blocked: 12, godown: "Salem-A", hsn: "11010000", gst: 5 },
  { sku: "SKU-8822", name: "Fortune Refined Oil 1L", cat: "Edible Oil", mrp: 145, sale: 138, stock: 412, ats: 380, blocked: 8, godown: "Salem-A", hsn: "15121910", gst: 5 },
  { sku: "SKU-8823", name: "Tata Tea Premium 500g", cat: "Beverages", mrp: 285, sale: 272, stock: 120, ats: 45, blocked: 0, godown: "Erode", hsn: "09023010", gst: 5 },
  { sku: "SKU-8824", name: "Surf Excel 2kg", cat: "Home Care", mrp: 420, sale: 398, stock: 234, ats: 210, blocked: 4, godown: "Salem-B", hsn: "34022010", gst: 18 },
  { sku: "SKU-8825", name: "Parle-G 800g", cat: "Biscuits", mrp: 90, sale: 85, stock: 1200, ats: 1180, blocked: 0, godown: "Salem-A", hsn: "19053100", gst: 18 },
  // SRS MART reference items
  { sku: "GW-1L", name: "Gold Winner RSF, 1L Pouch", cat: "Edible Oil", mrp: 1750, sale: 1681.9, stock: 240, ats: 210, blocked: 5, godown: "Salem-A", hsn: "15121910", gst: 5 },
  { sku: "GW-500", name: "Gold Winner RSF, 500ml Pouch", cat: "Edible Oil", mrp: 1780, sale: 1704.76, stock: 180, ats: 160, blocked: 3, godown: "Salem-A", hsn: "15121910", gst: 5 },
  { sku: "GW-5L", name: "Gold Winner RSF, 5L Can", cat: "Edible Oil", mrp: 2650, sale: 2538.1, stock: 85, ats: 72, blocked: 2, godown: "Salem-A", hsn: "15121910", gst: 5 },
  { sku: "SAM-A30", name: "Samsung A30", cat: "Electronics", mrp: 14500, sale: 10000, stock: 12, ats: 12, blocked: 0, godown: "Salem-A", hsn: "85171200", gst: 18 },
  { sku: "PUMA-TS", name: "Puma Blue Round Neck T-Shirt", cat: "Apparel", mrp: 1200, sale: 900, stock: 45, ats: 45, blocked: 0, godown: "Salem-A", hsn: "61091000", gst: 5 },
  { sku: "SURF-2KG", name: "Surf Excel 2kg", cat: "Home Care", mrp: 420, sale: 398, stock: 234, ats: 210, blocked: 4, godown: "Salem-B", hsn: "34022010", gst: 18 },
]

export const PARTIES = [
  { id: "P-SRS-001", name: "Jam jam maligai", type: "Retailer", tier: "Gold", balance: 101556, credit: 200000, status: "Approved", phone: "9876543210", gstin: "33AABCU1234F1Z5", address: "Tiruchengode", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-002", name: "SPM MALIGAI", type: "Retailer", tier: "Silver", balance: 1790, credit: 50000, status: "Approved", phone: "9876543211", gstin: "33AABCU1234F1Z6", address: "Tiruchengode", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-003", name: "NANDHI STORES", type: "Wholesale", tier: "Gold", balance: 3576, credit: 100000, status: "Approved", phone: "9876543212", gstin: "33AABCU1234F1Z7", address: "Namakkal", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-004", name: "Yamuna Devi maligai", type: "Retailer", tier: "Gold", balance: 4286, credit: 75000, status: "Approved", phone: "9876543213", gstin: "33AABCU1234F1Z8", address: "Tiruchengode", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-005", name: "MRV maligai, Andipalayam", type: "Retailer", tier: "Silver", balance: 3576, credit: 50000, status: "Approved", phone: "9876543214", gstin: "33AABCU1234F1Z9", address: "Andipalayam", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-006", name: "Meenakshi maligai", type: "Retailer", tier: "Gold", balance: 4110, credit: 80000, status: "Approved", phone: "9876543215", gstin: "33AABCU1234F1ZA", address: "Tiruchengode", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-007", name: "TVL. DEAR PLAZA PRIVATE LIMITED,", type: "Wholesale", tier: "Platinum", balance: 3616, credit: 250000, status: "Approved", phone: "9876543216", gstin: "33AABCU1234F1ZB", address: "Tiruchengode", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-008", name: "Neelagiri Amma maligai 1", type: "Retailer", tier: "Silver", balance: 1790, credit: 50000, status: "Approved", phone: "9876543217", gstin: "33AABCU1234F1ZC", address: "Tiruchengode", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-009", name: "SS Maligai, Bommakalpalayam", type: "Retailer", tier: "Gold", balance: 3556, credit: 75000, status: "Approved", phone: "9876543218", gstin: "33AABCU1234F1ZD", address: "Bommakalpalayam", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-010", name: "Sri Murugan Maligai, Vittampalayam", type: "Retailer", tier: "Silver", balance: 3680, credit: 50000, status: "Approved", phone: "9876543219", gstin: "33AABCU1234F1ZE", address: "Vittampalayam", placeOfSupply: "Tamil Nadu" },
  { id: "P-SRS-011", name: "Lucky malagai perumalmalai raod", type: "Retailer", tier: "Silver", balance: 1790, credit: 50000, status: "Approved", phone: "9876543220", gstin: "33AABCU1234F1ZF", address: "Perumalmalai", placeOfSupply: "Tamil Nadu" },
  { id: "P-001", name: "SKS Traders, Salem", type: "Retailer", tier: "Gold", balance: 48750, credit: 100000, status: "Approved", phone: "9876543221", gstin: "33AABCU1234F1ZG", address: "Salem", placeOfSupply: "Tamil Nadu" },
]

export const CAMPAIGN_PLATFORMS = [
  { name: "WhatsApp Business", icon: "💬", status: "Running", reach: "12,840", ctr: "8.4%", platform: "whatsapp" },
  { name: "Telegram", icon: "✈️", status: "Running", reach: "8,420", ctr: "6.2%", platform: "telegram" },
  { name: "Instagram", icon: "📸", status: "Running", reach: "15,230", ctr: "5.1%", platform: "instagram" },
  { name: "Facebook", icon: "📘", status: "Running", reach: "18,900", ctr: "4.8%", platform: "facebook" },
  { name: "Google Ads", icon: "🔍", status: "Running", reach: "22,100", ctr: "3.9%", platform: "google" },
  { name: "SMS (MSG91)", icon: "📲", status: "Running", reach: "9,740", ctr: "7.2%", platform: "sms" },
  { name: "Email (Resend)", icon: "📧", status: "Running", reach: "11,560", ctr: "6.8%", platform: "email" },
  { name: "IVR Phone AI", icon: "📞", status: "Running", reach: "6,830", ctr: "9.1%", platform: "phone" },
  { name: "YouTube", icon: "▶️", status: "Running", reach: "13,450", ctr: "4.2%", platform: "youtube" },
  { name: "In-App Push (FCM)", icon: "🔔", status: "Running", reach: "10,920", ctr: "10.4%", platform: "push" },
  { name: "Web Banner", icon: "🌐", status: "Running", reach: "7,680", ctr: "3.5%", platform: "web" },
  { name: "Voice Broadcast", icon: "🎙️", status: "Running", reach: "5,210", ctr: "8.9%", platform: "voice" },
]

export const DIGITAL_SEVAI = [
  { name: "PAN Services", icon: "🪪", requests: 124, revenue: 18600, status: "Active" },
  { name: "Passport Seva", icon: "🛂", requests: 42, revenue: 21000, status: "Active" },
  { name: "Aadhaar Update", icon: "🆔", requests: 89, revenue: 4450, status: "Active" },
  { name: "Income Certificate", icon: "📄", requests: 67, revenue: 6700, status: "Active" },
  { name: "Caste Certificate", icon: "📜", requests: 34, revenue: 3400, status: "Active" },
  { name: "Bill Payments", icon: "💡", requests: 210, revenue: 10500, status: "Active" },
  { name: "Insurance Leads", icon: "🛡️", requests: 18, revenue: 18000, status: "Active" },
  { name: "Loan Leads (NBFC)", icon: "🏦", requests: 12, revenue: 24000, status: "Active" },
]

export const SALES_INVOICES = [
  { id: "SRS/13815", date: "10 Aug 2026", party: "Jam jam maligai", dueIn: "4 Days", amount: 101556, status: "Unpaid", unpaid: 101556 },
  { id: "SRS/13814", date: "10 Aug 2026", party: "SPM MALIGAI", dueIn: "4 Days", amount: 1790, status: "Unpaid", unpaid: 1790 },
  { id: "SRS/13813", date: "10 Aug 2026", party: "NANDHI STORES", dueIn: "29 Days", amount: 3576, status: "Unpaid", unpaid: 3576 },
  { id: "SRS/13812", date: "10 Aug 2026", party: "Yamuna Devi maligai", dueIn: "4 Days", amount: 4286, status: "Unpaid", unpaid: 4286 },
  { id: "SRS/13811", date: "10 Aug 2026", party: "MRV maligai, Andipalayam", dueIn: "4 Days", amount: 3576, status: "Unpaid", unpaid: 3576 },
  { id: "SRS/13810", date: "10 Aug 2026", party: "Meenakshi maligai", dueIn: "4 Days", amount: 4110, status: "Unpaid", unpaid: 4110 },
  { id: "SRS/13809", date: "10 Aug 2026", party: "TVL. DEAR PLAZA PRIVATE LIMITED,", dueIn: "2 Days", amount: 3616, status: "Unpaid", unpaid: 3616 },
  { id: "SRS/13808", date: "10 Aug 2026", party: "Neelagiri Amma maligai 1", dueIn: "4 Days", amount: 1790, status: "Unpaid", unpaid: 1790 },
  { id: "SRS/13807", date: "10 Aug 2026", party: "SS Maligai, Bommakalpalayam", dueIn: "4 Days", amount: 3556, status: "Unpaid", unpaid: 3556 },
  { id: "SRS/13806", date: "10 Aug 2026", party: "Sri Murugan Maligai, Vittampalayam", dueIn: "4 Days", amount: 3680, status: "Unpaid", unpaid: 3680 },
  { id: "SRS/13805", date: "10 Aug 2026", party: "Lucky malagai perumalmalai raod", dueIn: "4 Days", amount: 1790, status: "Unpaid", unpaid: 1790 },
]

export const DELIVERIES = [
  { id: "TRIP-042", driver: "Kumar", orders: 14, route: "Salem → Omalur → Mettur", status: "In Transit", otp: "4821" },
  { id: "TRIP-043", driver: "Suresh", orders: 9, route: "Erode → Bhavani → Sathy", status: "Pending", otp: "—" },
  { id: "TRIP-044", driver: "Arun", orders: 22, route: "Salem City", status: "Delivered", otp: "Verified" },
]

export type PaperSize = "A4" | "A5"
export type InvoiceTheme = "plain" | "boats" | "jagannath" | "lakshmi" | "srs-gold"

export type Template = {
  id: InvoiceTheme
  name: string
  nameTamil?: string
  description: string
  category: "Classic" | "Devotional" | "Business"
  paper: PaperSize[]
  watermark: string // emoji/icon for preview, real would be image URL
  bg: string // tailwind bg
  accent: string
  preview: string
}

export const TEMPLATES: Template[] = [
  {
    id: "plain",
    name: "Plain White — Classic",
    description: "Clean SRS MART white, no watermark. Fastest print, A4/A5 laser friendly. As in 01.PNG",
    category: "Classic",
    paper: ["A4", "A5"],
    watermark: "—",
    bg: "bg-white",
    accent: "border-zinc-900",
    preview: "Plain",
  },
  {
    id: "srs-gold",
    name: "SRS Gold — Business",
    description: "Gold Winner RF style, with HSN & TCS, Tamil Nadu. Perfect for wholesale (your WhatsApp image).",
    category: "Business",
    paper: ["A4", "A5"],
    watermark: "—",
    bg: "bg-white",
    accent: "border-amber-600",
    preview: "Gold",
  },
  {
    id: "boats",
    name: "Boats — Traditional",
    description: "Light boat watermark at bottom (G3.PNG). Subtle, prints well on A4.",
    category: "Classic",
    paper: ["A4"],
    watermark: "⛵",
    bg: "bg-[#FFFDF5]",
    accent: "border-orange-200",
    preview: "Boats",
  },
  {
    id: "jagannath",
    name: "Jagannath — Devotional",
    description: "Lord Jagannath / Puri watermark centre (G2.PNG). For Odisha/WB stores, festivals.",
    category: "Devotional",
    paper: ["A4", "A5"],
    watermark: "🛕",
    bg: "bg-[#FFF9F0]",
    accent: "border-orange-300",
    preview: "Jagannath",
  },
  {
    id: "lakshmi",
    name: "Lakshmi — Auspicious",
    description: "Goddess Lakshmi with pink florals (G1.PNG). Most auspicious for new season billing.",
    category: "Devotional",
    paper: ["A4"],
    watermark: "🌸",
    bg: "bg-[#FFF5F8]",
    accent: "border-pink-200",
    preview: "Lakshmi",
  },
]

export const SAMPLE_INVOICE = {
  org: {
    name: "SRS MART",
    addr: "1/505, MUTHU COMPLEX, NADAR STREET, KUMARAMANGALAM, TIRUCHENGODE, Namakkal, Tamil Nadu, 637205",
    gstin: "33HHBPS9245C1Z9",
    mobile: "6369751801",
    pan: "ABFFM9795E",
    email: "officialsrsmart@gmail.com",
    store: "https://mybillbook.in/store/srs_mart",
    logo: "SRS",
  },
  invoice: {
    no: "AABBCCDD/202",
    date: "17/01/2023",
    due: "16/02/2023",
    vehicle: "TN34 AF4684",
    eway: "123213",
    placeOfSupply: "Karnataka",
  },
  billTo: {
    name: "Sample Party",
    addr: "No F2, Outer Circle, Connaught Circus, New Delhi, DELHI, 110001",
    mobile: "7400417400",
    gstin: "07ABCC H2702H4ZZ",
  },
  shipTo: null as any,
  items: [
    { s: 1, name: "Samsung A30", hsn: "1234", disc: "Disc", qty: "1 PCS", rate: 10000, discAmt: 1000, tax: "18% (10%+8%)", amount: 10620, taxAmt: 1620 },
    { s: 2, name: "Parle-G 200g", hsn: "40511209", disc: "-", qty: "1 BOX", rate: 342.86, discAmt: 51.43, tax: "5% (15%)", amount: 306, taxAmt: 14.57 },
    { s: 3, name: "Puma Blue Round Neck T-Shirt", hsn: "2032", disc: "-", qty: "2 PCS", rate: 900, discAmt: 0, tax: "5% (0%)", amount: 1890, taxAmt: 90 },
  ],
  totals: { qty: 4, taxable: 1051.43, tax: 1724.57, total: 9596.5, received: 0 },
  bank: {
    name: "SRS MART",
    ifsc: "DBSS0IN0726",
    ac: "872260000057327",
    bank: "Development Bank of Singapore ,TIRUCHENGODE-CHETTY ST.",
  },
  qr: { upi: "srsmart@dbs", phonepe: true },
}

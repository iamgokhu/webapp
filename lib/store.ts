"use client"
import { create } from "zustand"

export type Plan = "starter" | "growth" | "enterprise"

type User = {
  name: string
  mobile: string
  role: string
  branch: string
  plan: Plan
  avatar: string
}

type AuthState = {
  isAuthenticated: boolean
  user: User | null
  otpSent: boolean
  login: (mobile: string) => void
  verifyOtp: (otp: string) => boolean
  logout: () => void
  setPlan: (plan: Plan) => void
}

export const useAuth = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  user: null,
  otpSent: false,
  login: (mobile: string) => set({ otpSent: true }),
  verifyOtp: (otp: string) => {
    if (otp === "123456" || otp.length === 6) {
      set({
        isAuthenticated: true,
        otpSent: false,
        user: {
          name: "Gokhul Rajesh",
          mobile: "9876543210",
          role: "Super Admin / Owner",
          branch: "Salem HQ",
          plan: "enterprise",
          avatar: "GR",
        },
      })
      if (typeof window !== "undefined") localStorage.setItem("distribuai_paid", "true")
      return true
    }
    return false
  },
  logout: () => {
    set({ isAuthenticated: false, user: null, otpSent: false })
    if (typeof window !== "undefined") localStorage.removeItem("distribuai_paid")
  },
  setPlan: (plan) => set((s) => s.user ? ({ user: { ...s.user, plan } }) : s),
}))

type BillingState = {
  invoices: any[]
  addInvoice: (inv: any) => void
}

export const useBilling = create<BillingState>((set) => ({
  invoices: [
    { id: "INV-2026-1842", party: "SKS Traders, Salem", amount: 48750, gst: 7420, status: "PAID", date: "2026-08-10", items: 12 },
    { id: "INV-2026-1841", party: "Murugan Stores, Erode", amount: 12400, gst: 1890, status: "OVERDUE", date: "2026-08-09", items: 4 },
    { id: "INV-2026-1840", party: "Aavin Canteen, Namakkal", amount: 89300, gst: 13620, status: "PAID", date: "2026-08-09", items: 22 },
    { id: "INV-2026-1839", party: "Best Supermarket, Salem", amount: 35600, gst: 5430, status: "PENDING", date: "2026-08-08", items: 9 },
  ],
  addInvoice: (inv) => set((s) => ({ invoices: [inv, ...s.invoices] })),
}))

"use client"
import { cn } from "@/lib/utils"
import * as React from "react"

export function Button({ className, variant="default", size="default", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost" | "secondary", size?: "default"|"sm"|"lg"|"icon" }) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
  const variants: Record<string,string> = {
    default: "bg-zinc-900 text-white hover:bg-zinc-800 shadow",
    outline: "border border-zinc-200 bg-white hover:bg-zinc-50",
    ghost: "hover:bg-zinc-100",
    secondary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow",
  }
  const sizes: Record<string,string> = {
    default: "h-10 px-5 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-9 w-9",
  }
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}

export function Badge({ className, variant="default", ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default"|"secondary"|"outline"|"success"|"warning" }) {
  const v: Record<string,string> = {
    default: "bg-zinc-900 text-white",
    secondary: "bg-zinc-100 text-zinc-700",
    outline: "border border-zinc-200 bg-white",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-white",
  }
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", v[variant], className)} {...props} />
}

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-zinc-200 bg-white shadow-sm", className)} {...props} />
}
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-3", className)} {...props} />
}
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

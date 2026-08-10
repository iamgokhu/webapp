"use client"
import Link from "next/link"
import { Button } from "@/components/ui"
import { Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-[1280px] flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-bold text-sm">D</div>
          <span className="font-display font-bold tracking-tight">DistribuAI <span className="text-orange-500">OS</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
          <a href="#modules" className="hover:text-zinc-900">Modules</a>
          <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
          <a href="#agents" className="hover:text-zinc-900">AI Agents</a>
          <a href="#security" className="hover:text-zinc-900">Security</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/login"><Button variant="ghost" size="sm">Sign in</Button></Link>
          <Link href="/checkout?plan=growth"><Button variant="secondary" size="sm" className="gap-1"><Sparkles className="h-3.5 w-3.5"/> Start Free Trial</Button></Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2">{open?<X className="h-5 w-5"/>:<Menu className="h-5 w-5"/>}</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white p-4 space-y-3">
          <a href="#pricing" className="block">Pricing</a>
          <a href="#modules" className="block">Modules</a>
          <Link href="/login" className="block"><Button className="w-full">Sign in</Button></Link>
          <Link href="/checkout?plan=growth" className="block"><Button variant="secondary" className="w-full">Start Free Trial</Button></Link>
        </div>
      )}
    </header>
  )
}

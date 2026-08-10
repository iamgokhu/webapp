"use client"
import { useState } from "react"
import { useAuth } from "@/lib/store"
import { useRouter } from "next/navigation"
import { Button, Card, CardContent, CardHeader, Badge } from "@/components/ui"
import Link from "next/link"
import { Shield, Smartphone, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [mobile, setMobile] = useState("9876543210")
  const [otp, setOtp] = useState("")
  const { otpSent, login, verifyOtp } = useAuth()
  const router = useRouter()
  const [err, setErr] = useState("")

  return (
    <div className="min-h-screen bg-[#FCFCF9] grid place-items-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-600 mb-4"><ArrowLeft className="h-4 w-4" /> Back to site</Link>
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white font-bold">D</div>
            <h1 className="mt-3 text-xl font-bold">Mathi PI OS — Login</h1>
            <p className="text-xs text-zinc-500">OTP login • 6 digits • 5-min expiry • Rate limited 5/hour</p>
            <Badge variant="secondary" className="mx-auto mt-2">Demo OTP: 123456 (any 6 digits works)</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            {!otpSent ? (
              <>
                <label className="block text-sm font-medium">Mobile number
                  <div className="mt-1 flex gap-2">
                    <span className="rounded-xl border bg-zinc-50 px-3 py-2 text-sm">+91</span>
                    <input value={mobile} onChange={e=>setMobile(e.target.value)} className="flex-1 rounded-xl border px-3 py-2 bg-white" placeholder="9876543210" />
                  </div>
                </label>
                <Button className="w-full" onClick={()=>login(mobile)}><Smartphone className="h-4 w-4 mr-2" /> Send OTP via MSG91</Button>
                <div className="text-xs text-zinc-500 text-center">Paid customers also get WhatsApp OTP fallback</div>
              </>
            ) : (
              <>
                <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-sm">OTP sent to +91 {mobile} via MSG91. <button onClick={()=>{useAuth.setState({otpSent:false})}} className="underline">Change number</button></div>
                <label className="block text-sm font-medium">Enter OTP
                  <input value={otp} onChange={e=>setOtp(e.target.value)} maxLength={6} className="mt-1 w-full rounded-xl border px-3 py-3 text-center tracking-[0.4em] text-lg font-mono bg-white" placeholder="• • • • • •" />
                </label>
                {err && <div className="text-xs text-red-600">{err}</div>}
                <Button className="w-full" onClick={()=>{
                  const ok = verifyOtp(otp)
                  if (ok) router.push("/dashboard")
                  else setErr("Invalid OTP. Try 123456")
                }}><Shield className="h-4 w-4 mr-2" /> Verify & Enter Command Center</Button>
                <button className="w-full text-xs text-zinc-500 underline">Resend OTP (4s)</button>
              </>
            )}
            <div className="pt-3 border-t text-xs text-center text-zinc-500">
              By continuing you agree to DPDP Act, Terms, and GST compliance.<br />Paid plan required — <Link href="/checkout?plan=growth" className="underline font-medium">Start trial</Link>
            </div>
          </CardContent>
        </Card>
        <div className="mt-4 text-center text-xs text-zinc-500">© 2026 Mathi PI OS • AWS Mumbai • Support: +91 98765 43210</div>
      </div>
    </div>
  )
}

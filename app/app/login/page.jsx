"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (isLogin) {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false
        })

        if (res?.error) {
          setError("Invalid email or password")
        } else {
          window.location.href = "/"
        }
      } else {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password })
        })

        const data = await res.json()

        if (!res.ok) {
          setError(data.message || "Signup failed")
        } else {
          await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/"
          })
        }
      }
    } catch {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf0] to-[#fdecc8] px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-[#f3e8c8] p-8">
        
        {/* Heading */}
        <h1 className="text-3xl font-playfair text-center text-[#78350f] mb-2">
          {isLogin ? "Welcome Back" : "Create Your Account"}
        </h1>

        <p className="text-center text-sm text-[#92400e] mb-6">
          {isLogin
            ? "Login to continue your journey"
            : "Begin your personalized healing journey"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#f3e8c8] focus:outline-none focus:ring-2 focus:ring-[#d97706] bg-[#fffaf0]"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#f3e8c8] focus:outline-none focus:ring-2 focus:ring-[#d97706] bg-[#fffaf0]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-[#f3e8c8] focus:outline-none focus:ring-2 focus:ring-[#d97706] bg-[#fffaf0]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#d97706] text-white py-3 rounded-full font-medium hover:bg-[#b45309] transition disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Create Account"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        {/* Toggle */}
        <p className="mt-6 text-center text-sm text-[#78350f]">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-[#d97706] hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  )
}

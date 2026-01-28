"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  let closeTimeout;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ───── TOP BAR (LOGO ONLY) ───── */}
      <div className="w-full bg-[#fffaf0]/95 backdrop-blur border-b border-[#f3e8c8] flex justify-center">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-center md:justify-start">
          <Image
            src="/assets/white_logo.jpeg"
            alt="Company Logo"
            width={140}
            height={40}
            className="h-18 w-auto object-contain"
          />
        </div>
      </div>

      {/* ───── MAIN HEADER ───── */}
      <div className="w-full bg-black">
        <div className="relative max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-3 items-center text-white">
          {/* LEFT */}
          <div />

          {/* CENTER: Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-8 text-sm tracking-wide">
            <Link href="/" className="hover:text-[#fde68a] transition">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#fde68a] transition">
              About
            </Link>
            <Link href="/blogsPage" className="hover:text-[#fde68a] transition">
              Blogs
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex justify-end items-center gap-4">
            {/* Mobile Hamburger */}
            <button
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1"
              onClick={() => setOpen(true)}
            >
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
            </button>

            {/* Auth */}
            {!session ? (
              <Link
                href="/login"
                className="hidden md:block border border-white/80 px-4 py-2 rounded-full
                           text-sm hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
            ) : (
              <div
                className="relative hidden md:block"
                onMouseEnter={() => {
                  clearTimeout(closeTimeout);
                  setOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeout = setTimeout(() => setOpen(false), 200);
                }}
              >
                <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center cursor-pointer">
                  {session.user.email[0].toUpperCase()}
                </div>

                <div
                  className={`absolute right-0 mt-3 w-40 bg-black border border-white/20 rounded-md
                              transition-all duration-200
                              ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 invisible"}`}
                >
                  {session.user.role === "admin" && (
                    <Link
                      href="/admin"
                      className="block px-4 py-2 hover:bg-white/10"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left px-4 py-2 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ───── MOBILE SIDEBAR ───── */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity md:hidden
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50
                    transform transition-transform duration-300 md:hidden
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-lg">
          <button className="self-end text-2xl" onClick={() => setOpen(false)}>
            ✕
          </button>
          {session && (
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <div className="w-10 h-10 p-5 rounded-full border border-white flex items-center justify-center">
                {session.user.email[0].toUpperCase()}
              </div>
              <div className="text-sm">
                <p className="font-medium">{session.user.email}</p>
                {session.user.role === "admin" && (
                  <p className="text-xs text-yellow-400">Admin</p>
                )}
              </div>
            </div>
          )}

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/blogsPage" onClick={() => setOpen(false)}>
            Blogs
          </Link>

          {!session ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Logout
            </button>
          )}
        </div>
      </aside>
    </header>
  );
}

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
      <div className="w-full bg-[#fffaf0]/95 backdrop-blur border-b border-[#f3e8c8]">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-center md:justify-start">
          {/* Replace src with your real logo */}
          <Image
  src="/assets/logo.jpeg"   // your logo path
  alt="Company Logo"
  width={140}              // max width
  height={40}              // max height
  className="h-10 w-auto object-contain"
/>
        </div>
      </div>

      {/* ───── MAIN HEADER (BLACK) ───── */}
      <div className="w-full bg-black">
        <div className="max-w-[1200px] mx-auto px-4 py-4 grid grid-cols-3 items-center text-white">

          {/* LEFT: Empty / Future use */}
          <div />

          {/* CENTER: Navigation */}
          <nav className="hidden md:flex justify-center gap-8 text-sm tracking-wide">
            <Link href="#about" className="hover:text-[#fde68a] transition">
              About
            </Link>
            <Link href="#contact" className="hover:text-[#fde68a] transition">
              Contact
            </Link>
          </nav>

          {/* RIGHT: Actions */}
          <div className="flex justify-end items-center gap-4">

            {/* Blogs */}
            <Link
              href="/blogsPage"
              className="border border-white/80 text-white px-5 py-2 rounded-full
                         text-sm font-medium hover:bg-white hover:text-black
                         transition-all duration-300"
            >
              Blogs
            </Link>

            {/* Auth */}
            {!session ? (
              <Link
                href="/login"
                className="border border-white/80 text-white px-4 py-2 rounded-full
                           text-sm font-medium hover:bg-white hover:text-black
                           transition-all duration-300"
              >
                Login
              </Link>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(closeTimeout);
                  setOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimeout = setTimeout(() => setOpen(false), 200);
                }}
              >
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full border border-white
                                flex items-center justify-center font-semibold
                                cursor-pointer text-sm">
                  {session.user.email[0].toUpperCase()}
                </div>

                {/* Dropdown */}
                <div
                  className={`absolute right-0 mt-3 w-40 bg-black text-white
                              border border-white/20 rounded-md shadow-lg
                              transition-all duration-200 ease-out
                              ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                >
                  {session.user.role === "admin" && (
                    <Link
                      href="/admin"
                      className="block px-4 py-2 text-sm hover:bg-white/10"
                    >
                      Admin Panel
                    </Link>
                  )}

                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

    </header>
  );
}

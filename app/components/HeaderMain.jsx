"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [open,setOpen] = useState(false)

  let closeTimeout;



  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fffaf0]/90 backdrop-blur border-b border-[#f3e8c8]">
      <div className="max-w-[1200px] mx-auto px-4 py-4 grid grid-cols-3 items-center">
        {/* LEFT: Brand */}
        <div>
          <Link href="/" className="font-playfair text-xl text-[#78350f]">
            Dr. Neetu Mohan
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <nav className="hidden md:flex justify-center gap-8 text-sm">
          <Link href="#about" className="hover:text-[#d97706] transition">
            About
          </Link>

          <Link href="#contact" className="hover:text-[#d97706] transition">
            Contact
          </Link>
        </nav>

        {/* RIGHT: Auth / Blogs */}
        <div className="flex justify-end items-center gap-4">
          {/* Blogs button */}
          <Link
            href="/blogsPage"
            className="bg-[#d97706] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#b45309] transition"
          >
            Blogs
          </Link>

          {/* Auth section */}
          {!session ? (
            <Link
              href="/login"
              className="text-sm font-medium text-[#78350f] border border-[#78350f] px-4 py-2 rounded-full hover:bg-[#78350f] hover:text-white transition"
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
              {/* User avatar */}
              <div className="w-9 h-9 rounded-full bg-[#78350f] text-white flex items-center justify-center font-semibold cursor-pointer">
                {session.user.email[0].toUpperCase()}
              </div>

              {/* Dropdown */}
              <div
                className={`
  absolute right-0 mt-3 w-40 bg-white border rounded-md shadow-md
  transition-all duration-200 ease-out
  ${open ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
`}
              >
                {session.user.role === "admin" && (
                  <Link
                    href="/admin"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Admin Panel
                  </Link>
                )}

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

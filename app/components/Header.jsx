"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  let closeTimeout;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="w-full">
        <div className="relative max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-3 items-center text-white">
          
          {/* Left Column (empty or logo placeholder) */}
          <div />

          {/* Center Navigation */}
          <nav className="flex justify-center gap-8 text-sm tracking-wide">
            <Link
              href="/"
              className="relative hover:text-[#fde68a] transition
                         after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-[#fde68a]
                         after:transition-all hover:after:w-full"
            >
              Home
            </Link>

            <Link
              href="/blogsPage"
              className="relative hover:text-[#fde68a] transition
                         after:absolute after:left-0 after:-bottom-1
                         after:h-[2px] after:w-0 after:bg-[#fde68a]
                         after:transition-all hover:after:w-full"
            >
              Blogs
            </Link>
          </nav>

          {/* Right Side (Auth Section) */}
          <div className="flex justify-end items-center gap-4">
            {!session ? (
              <Link
                href="/login"
                className="border border-white/80 px-4 py-2 rounded-full
                           text-sm hover:bg-white hover:text-black transition"
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
    </header>
  );
}

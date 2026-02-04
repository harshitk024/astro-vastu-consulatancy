"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  let closeTimeout;

  // ─── Scroll hide logic ───
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Lock body scroll when menu open ───
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* ───── HEADER STACK (TOP BAR + NAV) ───── */}
      <div
        className={`transition-transform duration-300 ease-in-out
        ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
      >
        {/* ───── TOP BAR ───── */}
        <div className="w-full bg-[#F7EDC2] border-b border-[#f3e8c8] flex justify-center">
          <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-center md:justify-start">
            <Image
              src="/assets/logo.png"
              alt="Company Logo"
              width={140}
              height={40}
              className="h-18 w-auto object-contain"
            />
          </div>
        </div>

        {/* ───── MAIN NAVBAR ───── */}
        <div className="w-full bg-black">
          <div className="relative max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-3 items-center text-white">
            <div />

            {/* Desktop Nav */}
            <nav className="hidden md:flex justify-center gap-8 text-sm tracking-wide">
              {["Home", "About", "Blogs"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : item === "About" ? "#about" : "/blogsPage"}
                className="relative hover:text-[#fde68a] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#fde68a] after:transition-all hover:after:w-full"
              >
                {item}
              </Link>
            ))}
            </nav>

            {/* Right Side */}
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
      </div>

      {/* ───── MOBILE OVERLAY ───── */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity md:hidden
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* ───── MOBILE SIDEBAR ───── */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50
        transform transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-lg">
          <button
            className="self-end w-10 h-10 rounded-full bg-black border border-white/30
                       flex items-center justify-center text-xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {session && (
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center p-2">
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

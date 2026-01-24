"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fffaf0]/90 backdrop-blur border-b border-[#f3e8c8]">
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="font-playfair text-xl text-[#78350f]">
          Dr. Neetu Mohan
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="#about" className="hover:text-[#d97706] transition">
            About
          </Link>

          <Link href="#contact" className="hover:text-[#d97706] transition">
            Contact
          </Link>
        </nav>

        {/* Blog Button */}
        <Link
          href="/blogsPage"
          className="bg-[#d97706] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#b45309] transition"
        >
          Blogs
        </Link>
      </div>
    </header>
  );
}

"use client";

import Sidebar from "@/components/AdminComponents/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <ToastContainer theme="dark" />

      {/* Desktop Layout */}
      <div className="hidden md:flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <div className="py-3 px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
          </div>
          <div className="p-8">{children}</div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between py-3 px-4 border-b border-black">
          <h3 className="font-medium">Admin Panel</h3>
          <button onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Drawer */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />
            {/* Mobile Drawer */}
            <div
              className={`
    fixed top-0 left-0 z-50 h-screen
    transform transition-transform duration-300 ease-in-out
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:hidden
  `}
            >
              <Sidebar />
            </div>

            {/* Overlay */}
            <div
              onClick={() => setOpen(false)}
              className={`
    fixed inset-0 bg-black/40 transition-opacity duration-300
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
    md:hidden
  `}
            />
          </>
        )}

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

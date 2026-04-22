import { SidebarSection } from "@/components/layout/Sidebar";
import { Bell, Search, TrendingUp } from "lucide-react";
import React, { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SIDEBAR_WIDTH = "w-56"; // 14rem

  return (
    <div className="flex min-h-screen bg-muted/40">
      
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside
        className={`hidden md:flex ${SIDEBAR_WIDTH} fixed left-0 top-0 h-screen bg-white shadow-md p-4`}
      >
        <SidebarSection />
      </aside>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isSidebarOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarSection
            isSidebar={true}
            setIsSidebar={setIsSidebarOpen}
          />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 md:ml-56">

        {/* Header */}
        <header className="fixed top-0 right-0 md:left-56 left-0 z-40 bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            
            {/* Left */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden"
                onClick={() => setIsSidebarOpen(true)}
              >
                <IoReorderThreeSharp size={28} />
              </button>

              <div className="flex items-center gap-3">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <TrendingUp className="text-teal-700" />
                </div>
                <h1 className="text-xl md:text-2xl font-bold">
                  Admin Dashboard
                </h1>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition">
                <Search className="h-5 w-5" />
              </div>

              <div className="relative p-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
              </div>
            </div>

          </div>
        </header>

        {/* Header Spacer */}
        <div className="h-[80px]" />

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { TbCloverFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const containerHeight = isHome ? "min-h-[80vh]" : "min-h-[40vh]";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <div className={`${containerHeight} text-white rounded-b-3xl pb-20 bg-[#9538E2]`}>
        {/* Navbar */}
        <div className="navbar px-4 pt-4 max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-bold text-white">eMart</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex navbar-center">
            <ul className="menu menu-horizontal gap-6 text-white font-semibold">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/statistics">Statistics</Link></li>
              <li><Link href="/DashBoard">Dashboard</Link></li>
            </ul>
          </div>

          {/* Icons */}
          <div className="navbar-end hidden lg:flex gap-2">
            <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
              <FaShoppingCart />
            </button>
            <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
              <TbCloverFilled />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-6 pt-4 space-y-4">
            <ul className="flex flex-col gap-4 font-semibold">
              <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="/statistics" onClick={() => setIsMobileMenuOpen(false)}>Statistics</Link></li>
              <li><Link href="/DashBoard" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link></li>
            </ul>
            <div className="flex gap-4 mt-4">
              <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
                <FaShoppingCart />
              </button>
              <button className="btn bg-white text-[#9538E2] rounded-full hover:bg-purple-200">
                <TbCloverFilled />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-950 shadow-md p-4 flex justify-between items-center relative bg-opacity-50">
      
      {/* Logo → real route, so Link is OK */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/clusterpalLogo.png"
          alt="ClusterPal Logo"
          width={60}
          height={60}
          priority
        />
        <span
          className="font-bold text-L text-orange-400"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          CLUSTERPAL
        </span>
      </Link>

      {/* Desktop Links (ANCHORS, not Link) */}
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="text-orange-400 hover:text-blue-600">Home</a>
        <a href="#services" className="text-orange-400 hover:text-blue-600">Services</a>
        <a href="#about" className="text-orange-400 hover:text-blue-600">About</a>
        <a href="#contact" className="text-orange-400 hover:text-blue-600">Contact</a>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-orange-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-3 py-4 md:hidden z-50">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

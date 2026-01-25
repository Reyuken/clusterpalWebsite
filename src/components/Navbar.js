"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react"; // ✅ For the hamburger and close icons
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-950 shadow-md p-4 flex justify-between items-center relative bg-opacity-50">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/clusterpalLogo.png"
          alt="ClusterPal Logo"
          width={60}
          height={60}
          priority
          style={{ height: "auto", width: "auto" }}
        />
        <span className="font-bold text-L text-orange-400" style={{ fontFamily: "Times New Roman, Times, serif" }}>CLUSTERPAL</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="text-orange-400 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-orange-400 hover:text-blue-600">About</Link>
        <Link href="/contact" className="text-orange-400 hover:text-blue-600">Contact</Link>
      </div>


      {/* Hamburger button for mobile */}
      <button
        className="md:hidden text-gray-700 hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-3 py-4 md:hidden z-50">
          <Link href="/" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

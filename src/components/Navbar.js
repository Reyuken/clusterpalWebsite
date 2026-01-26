"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-950/95 shadow-md p-4 flex justify-between items-center z-50">
      
      {/* Logo → real route, so Link is OK */}
      <a href="#home" className="flex items-center space-x-2">
        <Image
          src="/images/clusterpalLogo.png"
          alt="ClusterPal Logo"
          width={70}
          height={70}
          priority
        />
        <span
          className="font-bold text-L text-orange-400"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          CLUSTERPAL
        </span>
      </a>

      {/* Desktop Links (ANCHORS, not Link) */}
      <div className="hidden md:flex space-x-4">
        <a href="#home" className="text-orange-400 hover:text-opacity-90 hover:text-orange-600 hover:scale-110 transition-colors duration-200">Home</a>
        <a href="#services" className="text-orange-400 hover:text-opacity-90 hover:text-orange-600 hover:scale-110 transition-colors duration-200">Services</a>
        <a href="#about" className="text-orange-400 hover:text-opacity-90 hover:text-orange-600 hover:scale-110 transition-colors duration-200">About</a>
        <a href="#contact" className="text-orange-400 hover:text-opacity-90 hover:text-orange-600 hover:scale-110 transition-colors duration-200">Contact</a>
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
        <div className="absolute top-16 right-4 w-30 bg-gray-100/95 backdrop-blur-md shadow-md flex flex-col items-center space-y-3 py-4 px-4 md:hidden z-50 rounded-lg">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
          >
            Contact
          </a>
        </div>
      )}

    </nav>
  );
}

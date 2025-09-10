'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex h-20 shadow-md">
      {/* Left Section (Logo + Org Name) */}
      <div className="w-[30%] bg-white flex items-center px-6 gap-3">
        {/* Replace this with your logo image when ready */}
        <div className="w-12 h-12 relative">
       <Image
  src="/logo.jpg"
  fill
  style={{ objectFit: 'contain' }}
  alt="Logo"
/>

        </div>
        <span className="font-heading text-dark font-bold text-lg">
          SHE FORWARD CBO
        </span>
      </div>

      {/* Right Section (Links) */}
      <div className="w-[70%] bg-[#004d43] flex items-center justify-end px-6 relative">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 font-heading text-light text-lg">
           <Link href="/">Home</Link>
          <Link href="/about" className="hover:text-gold transition">About</Link>
          <Link href="/impact" className="hover:text-gold transition">Impact</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
  

          <Link href="#contact" className="hover:text-gold transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 w-full bg-dark text-light font-heading flex flex-col gap-4 p-4 md:hidden shadow-md z-50">
            <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#impact" onClick={() => setIsOpen(false)}>Impact</Link>
            <Link href="#get-involved" onClick={() => setIsOpen(false)}>Get Involved</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

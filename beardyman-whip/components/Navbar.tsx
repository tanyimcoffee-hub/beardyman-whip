"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <Link href="/" className="text-2xl tracking-wide">
          Beardyman Whip
        </Link>

        <div className="flex items-center gap-8 text-sm uppercase tracking-[2px]">
          
          <Link href="/">
            Home
          </Link>

          <Link href="/menu">
            Menu
          </Link>

          <Link href="/gallery">
            Gallery
          </Link>

          <a
            href="https://line.me/"
            target="_blank"
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Line Contact
          </a>

        </div>
      </div>
    </nav>
  );
}
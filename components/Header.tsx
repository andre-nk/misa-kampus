import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-around items-center w-full bg-surface h-20 overflow-hidden">
      <Link href="/" className="capitalize font-bold">Tentang Kami</Link>
      <Link href="/">Staff</Link>
      <div className="relative">
        <div className="z-10 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src="/graphics/logo.png"
            alt="logo.png"
            width={48}
            height={48}
          />
        </div>
        <div className="h-48 w-48 top-2 relative">
          <Image
            src="/graphics/cross.svg"
            alt="cross.svg"
            fill
            className="rounded-full" // just an example
          />
        </div>
      </div>
      <Link href="/">Program Kerja</Link>
      <Link href="/">Kontak</Link>
    </nav>
  );
}

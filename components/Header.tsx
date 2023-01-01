import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <nav className="flex justify-around items-center w-full bg-surface h-20 overflow-hidden">
      <NavLink caption="Tentang Kami" link="/" />
      <NavLink caption="Staff" link="/" />
      <div className="relative">
        <div className="z-10 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src="/graphics/logo.png"
            alt="logo.png"
            width={48}
            height={48}
          />
        </div>
        <div className="h-52 w-52 top-2 relative">
          <Image
            src="/graphics/cross.svg"
            alt="cross.svg"
            fill
          />
        </div>
      </div>
      <NavLink caption="Program Kerja" link="/" />
      <NavLink caption="Kontak" link="/" />
    </nav>
  );
}

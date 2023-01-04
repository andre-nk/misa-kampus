import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <nav className="flex justify-between px-8 lg:px-0 lg:justify-around items-center w-full bg-surface h-20 overflow-hidden">
      <div className="hidden lg:block">
        <NavLink caption="Tentang Kami" link="/" />
      </div>
      <div className="hidden lg:block">
        <NavLink caption="Staff" link="/" />
      </div>

      <div className="hidden lg:block relative">
        <div className="hidden lg:block z-10 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src="/graphics/logo.png"
            alt="logo.png"
            width={48}
            height={48}
          />
        </div>
        <div className="hidden lg:block h-52 w-52 top-2 relative">
          <Image src="/graphics/cross.svg" alt="cross.svg" fill />
        </div>
      </div>
      <div className="hidden lg:block">
        <NavLink caption="Program Kerja" link="/" />
      </div>
      <div className="hidden lg:block">
        <NavLink caption="Kontak" link="/" />
      </div>

      <div className="flex space-x-4 justify-start items-center lg:hidden">
        <Image src="/graphics/logo.png" alt="logo.png" width={36} height={36} />
        <p className="text-body-md">Misa Kampus UGM</p>
      </div>
      <button className="block lg:hidden h-10 w-10 p-2 rounded-full transition hover:bg-tertiary">
        <Bars3Icon className="text-sm" />
      </button>
    </nav>
  );
}

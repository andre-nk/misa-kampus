"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { useRouter, usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return pathname == "/" ? (
    <nav className="flex justify-between px-8 lg:px-0 lg:justify-around items-center w-full bg-surface h-20 overflow-hidden">
      <div className="hidden lg:block">
        <NavLink caption="Tentang Kami" link="/" />
      </div>
      <div className="hidden lg:block">
        <NavLink caption="Staff" link="/" />
      </div>

      <div
        onClick={() => {
          router.replace("/");
        }}
        className="hidden lg:block relative cursor-pointer"
      >
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
        <NavLink caption="Program Kerja" link="/proker" />
      </div>
      <div className="hidden lg:block">
        <NavLink caption="Kontak" link="/" />
      </div>

      <div
        onClick={() => {
          router.replace("/");
        }}
        className="flex space-x-4 justify-start items-center lg:hidden cursor-pointer"
      >
        <Image src="/graphics/logo.png" alt="logo.png" width={36} height={36} />
        <p className="text-body-md">Misa Kampus UGM</p>
      </div>
      <button className="block lg:hidden h-10 w-10 p-2 rounded-full transition hover:bg-tertiary">
        <Bars3Icon className="text-sm" />
      </button>
    </nav>
  ) : (
    <nav className="flex lg:flex-row-reverse justify-between px-8 lg:px-20 items-center w-full bg-surface h-20 overflow-hidden">
      <div className="flex space-x-20">
        <div className="hidden lg:block">
          <NavLink caption="Tentang Kami" link="/" />
        </div>
        <div className="hidden lg:block">
          <NavLink caption="Staff" link="/" />
        </div>
        <div className="hidden lg:block">
          <NavLink caption="Program Kerja" link="/proker" />
        </div>
        <div className="hidden lg:block">
          <NavLink caption="Kontak" link="/" />
        </div>
      </div>

      <div
        onClick={() => {
          router.replace("/");
        }}
        className="flex space-x-4 justify-start items-center cursor-pointer"
      >
        <Image src="/graphics/logo.png" alt="logo.png" width={36} height={36} />
        <p className="text-body-md">Misa Kampus UGM</p>
      </div>

      <button className="block lg:hidden h-10 w-10 p-2 rounded-full transition hover:bg-tertiary">
        <Bars3Icon className="text-sm" />
      </button>
    </nav>
  );
}

import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="w-full bg-dark h-80 mt-36 flex px-24 py-12">
      <div className="flex-1 flex flex-col justify-between items-start">
        <div>
          <div className="w-full flex items-center space-x-8">
            <div className="h-[4.25rem] w-[3.25rem] relative">
              <Image src="/graphics/logo.png" alt="cross.svg" fill />
            </div>
            <div className="h-[3.5rem] w-[3.5rem] relative">
              <Image src="/graphics/ugm_gold.png" alt="cross.svg" fill />
            </div>
          </div>
          <div className="text-light mt-4 text-body-md">
            <p className="text-secondary">Misa Kampus</p>
            <p>bagian dari Universitas Gadjah Mada</p>
          </div>
        </div>
        <p className="text-light mt-12">© 2023. All rights reserved</p>
      </div>
      <div className="flex-1 flex flex-col justify-around items-end">
        <NavLink caption="Tentang Kami" link="/" isLight={false} />
        <NavLink caption="Staff" link="/" isLight={false} />
        <NavLink caption="Program Kerja" link="/" isLight={false} />
        <NavLink caption="Kontak" link="/" isLight={false} />
      </div>
    </footer>
  );
}

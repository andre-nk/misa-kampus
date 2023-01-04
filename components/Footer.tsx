import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="w-full bg-dark flex flex-col-reverse lg:flex-row lg:h-80 mt-36 px-12  py-12 lg:px-24">
      <div className="flex-1 flex flex-col justify-between items-center lg:items-start mt-16 lg:mt-0">
        <div className="flex flex-col items-center lg:items-start">
          <div className="lg:w-full flex items-center space-x-8">
            <div className="h-[4.25rem] w-[3.25rem] relative">
              <Image src="/graphics/logo.png" alt="cross.svg" fill />
            </div>
            <div className="h-[3.5rem] w-[3.5rem] relative">
              <Image src="/graphics/ugm_gold.png" alt="cross.svg" fill />
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start text-light mt-4 text-body-md">
            <p className="text-secondary">Misa Kampus</p>
            <p>bagian dari Universitas Gadjah Mada</p>
          </div>
        </div>
        <p className="text-light mt-12">© 2023. All rights reserved</p>
      </div>
      <div className="flex-1 flex flex-col space-y-5 lg:space-y-0 justify-around items-center lg:items-end">
        <NavLink caption="Tentang Kami" link="/" isLight={false} />
        <NavLink caption="Staff" link="/" isLight={false} />
        <NavLink caption="Program Kerja" link="/" isLight={false} />
        <NavLink caption="Kontak" link="/" isLight={false} />
      </div>
    </footer>
  );
}

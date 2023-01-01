import React from "react";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="w-full h-full z-20 absolute top-0 flex items-center px-32 py-12">
          <div className="flex-1 flex flex-col justify-start">
            <h1 className="text-light font-serif text-h3 leading-tight">
              <span className="text-primary">OPREC</span> Misa Kampus UGM 2023
              telah dibuka!
            </h1>
            <p className="text-body-md text-light mt-2">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis augue felis. Mauris vitae orci nibh. Sed lobortis congue purus, vitae rutrum arcu feugiat nec. Pellentesque ac nisl orci."
              }
            </p>
            <button className="flex items-center transition-transform duration-200 hover:scale-105 bg-primary text-light w-fit px-5 py-2.5 mt-8 rounded-lg space-x-4">
              <p>DAFTAR SEKARANG</p>
              <ArrowRightIcon className="h-4" />
            </button>
          </div>
          <div className="flex-1 flex aspect-square relative h-full justify-end">
            <Image src="/graphics/sample-hero-2.png" alt="hero.png" fill className="pl-24" />
          </div>
        </div>
        <div className="w-full h-full bg-dark-gray mix-blend-multiply z-10 absolute top-0"></div>
        <div className="w-full h-[77.5vh] bg-sample-hero bg-cover" />
      </div>
      <div className="relative -top-8 z-30 w-full h-fit flex justify-center">
        <div className="aspect-square h-16 w-16 bg-secondary flex justify-center items-center rounded-full">
          <ArrowDownIcon className="h-6" />
        </div>
      </div>
    </main>
  );
}

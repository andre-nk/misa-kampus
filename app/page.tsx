import React from "react";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ProgramCard from "../components/ProgramCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-8 scroll-smooth">
      {/*Hero*/}
      <div className="hero">
        <div className="relative">
          <div className="w-full h-full z-20 absolute top-0 flex items-center px-[5.5rem] py-12">
            <div className="flex-1 flex flex-col justify-start pr-20">
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
            <div className="flex-1 relative aspect-square h-full">
              <Image
                src="/graphics/sample-hero-2.png"
                alt="hero.png"
                fill
                className="pl-24"
              />
            </div>
          </div>
          <div className="w-full h-full bg-dark-gray mix-blend-multiply z-10 absolute top-0"></div>
          <div className="w-full h-[77.5vh] bg-sample-hero bg-cover" />
        </div>
        <div className="relative -top-8 z-30 w-full h-fit flex justify-center">
          <a href="#quote" className="aspect-square h-16 w-16 transition-shadow hover:shadow-md duration-200 bg-secondary hover:bg-tertiary flex justify-center items-center rounded-full">
            <ArrowDownIcon className="h-6" />
          </a>
        </div>
      </div>

      {/*Quote*/}
      <div id="quote" className="w-full flex flex-col items-center justify-center py-28 space-y-1.5">
        <h2 className="text-h4 font-serif">{`"Ad Maiorem Dei Gloriam"`}</h2>
        <p className="text-h6">- St. Ignatius Loyola -</p>
      </div>

      {/*From us grid*/}
      <div className="w-full flex flex-col px-24 items-center">
        <h2 className="text-h4 font-serif self-start">Dari kami</h2>
        <div className="w-full grid grid-cols-3 gap-12 mt-8">
          {Array.from({ length: 9 }, (_, i) => (
            <ProgramCard index={i} key={i} />
          ))}
        </div>
        <button className="flex items-center transition-transform duration-200 hover:scale-105 bg-primary text-light w-fit px-5 py-2.5 mt-8 rounded-lg space-x-4">
          <p>LIHAT SEMUA</p>
          <ArrowRightIcon className="h-4" />
        </button>
      </div>
    </main>
  );
}

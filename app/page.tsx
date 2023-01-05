import React from "react";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ProgramCard from "../components/ProgramCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-8 debug-screens">
      {/*Hero*/}
      <div className="relative">
        <div className="w-full h-full flex flex-col lg:flex-row-reverse items-center absolute top-0 z-20 px-12 lg:px-24">
          <div className="w-[60vw] mt-12 lg:mt-0 lg:flex-[2] relative aspect-square">
            <Image src="/graphics/sample-hero-2.png" alt="hero.png" fill />
          </div>
          <div className="hidden lg:block flex-[1]"/>
          <div className="mt-12 lg:mt-0 lg:flex-[3] text-center lg:text-start flex flex-col items-center lg:items-start">
            <h1 className="text-light font-serif text-h4 lg:text-h3 leading-tight">
              <span className="text-primary">OPREC</span> Misa Kampus UGM 2023
              telah dibuka!
            </h1>
            <p className="text-body-sm lg:text-body-md text-light mt-2">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis augue felis. Mauris vitae orci nibh. Sed lobortis congue purus, vitae rutrum arcu feugiat nec."
              }
            </p>
            <button className="flex items-center transition-transform duration-200 hover:scale-105 bg-primary text-light w-fit px-5 py-2.5 mt-8 rounded-lg space-x-4">
              <p>DAFTAR SEKARANG</p>
              <ArrowRightIcon className="h-4" />
            </button>
          </div>
        </div>
        <div className="absolute -bottom-8 z-30 w-full h-fit flex justify-center">
          <a
            href="#quote"
            className="aspect-square h-16 w-16 transition-shadow hover:shadow-md duration-200 bg-secondary hover:bg-tertiary flex justify-center items-center rounded-full"
          >
            <ArrowDownIcon className="h-6" />
          </a>
        </div>
        <div className="w-full h-[120vh] lg:h-[80vh] absolute top-0 z-10 bg-black bg-opacity-80 bg-blend-multiply" />
        <div className="w-full h-[120vh] lg:h-[80vh] bg-sample-hero bg-cover bg-center" />
      </div>

      {/*Quote*/}
      <div
        id="quote"
        className="w-full flex flex-col items-center justify-center px-10 md:px-16 lg:px-0 py-28 space-y-1.5"
      >
        <h2 className="text-h5 lg:text-h4 font-serif">{`"Ad Maiorem Dei Gloriam"`}</h2>
        <p className="text-body-md lg:text-h6">- St. Ignatius Loyola -</p>
      </div>

      {/*From us grid*/}
      <div className="w-full flex flex-col px-10 md:px-16 lg:px-24 items-center">
        <h2 className="text-h5 lg:text-h4 font-serif self-start">Dari kami</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
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

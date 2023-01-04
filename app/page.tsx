import React from "react";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import ProgramCard from "../components/ProgramCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mb-8 debug-screens">
      {/*Hero*/}

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

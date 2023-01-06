import React from "react";
import ProgramCard from "../../components/ProgramCard";

export default function ProgramPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center py-24 px-10 md:px-16 lg:px-24">
        <h2 className="font-serif text-h4 md:text-h3">Program Kerja</h2>
        <p className="text-body-sm md:text-body-md pt-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          augue felis.
        </p>
      </div>
      <div className="w-full px-10 md:px-16 lg:px-24">
        <div className="h-[1.5px] w-full bg-dark-gray opacity-40" />
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-between px-12 py-3 text-body-sm">
          <p>SEMUA</p>
          <p>HUMED</p>
          <p>LITSOS</p>
          <p>HRD</p>
          <p>KMK</p>
        </div>
        <div className="h-[1.5px] w-full bg-dark-gray opacity-40" />
      </div>
      <div className="w-full flex flex-col px-10 md:px-16 lg:px-24 items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
          {Array.from({ length: 9 }, (_, i) => (
            <ProgramCard index={i} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

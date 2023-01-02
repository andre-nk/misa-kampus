import React from "react";

export default function ProgramCard({ index }: { index: number }) {
  return (
    <div
      className="w-full transition-transform duration-200 hover:-rotate-2 hover:bg-neutral-100 rounded-lg flex flex-col justify-center items-center"
      key={index}
    >
      <div className="w-full aspect-video bg-slate-400 rounded-lg" />
      <div className="p-5 w-full flex flex-col">
        <h4 className="text-h6">Melekat 2023</h4>
        <p className="text-body-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          augue felis....
        </p>
      </div>
    </div>
  );
}

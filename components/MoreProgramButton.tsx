'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function MoreProgramButton() {
  const router = useRouter();
  
  return (
    <button
      onClick={() => {
        router.push("/proker");
      }}
      className="flex items-center transition-transform duration-200 hover:scale-105 bg-primary text-light w-fit px-5 py-2.5 mt-8 rounded-lg space-x-4"
    >
      <p>LIHAT SEMUA</p>
      <ArrowRightIcon className="h-4" />
    </button>
  );
}

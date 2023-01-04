import Link from "next/link";
import React from "react";

export default function NavLink({
  link,
  caption,
  isLight = true,
}: {
  link: String;
  caption: String;
  isLight?: boolean;
}) {
  return (
    <Link
      href={link.toString()}
      className="group capitalize"
      passHref
    >
      <p
        className={`transition group-hover:font-bold ${
          isLight ? "text-dark" : "text-light"
        }`}
      >
        {caption}
      </p>
      <div className="transition-width center duration-500 opacity-0 h-0.5 mt-1 rounded-full w-0 bg-secondary group-hover:opacity-100 group-hover:w-full" />
    </Link>
  );
}

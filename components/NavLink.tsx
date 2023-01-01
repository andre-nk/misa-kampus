import Link from "next/link";
import React from "react";

export default function NavLink({
  link,
  caption,
}: {
  link: String;
  caption: String;
}) {
  return (
    <Link
      href={link.toString()}
      className="group capitalize font-bold"
      passHref
    >
      <p className="transition group-hover:font-bold">{caption}</p>
      <div className="transition-width center duration-500 opacity-0 h-0.5 mt-1 rounded-full w-0 bg-primary group-hover:opacity-100 group-hover:w-full" />
    </Link>
  );
}

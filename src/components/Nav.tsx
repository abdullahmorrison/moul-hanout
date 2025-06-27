"use client";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import routes from "@/lib/routes";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex items-center justify-between p-6 text-2xl font-bold text-primary">
        <Link href="/" className="text-lg">
          <div className="flex h-15 w-15 flex-col items-center justify-center rounded-[50%] border-2 border-white bg-primary p-2 text-white outline-2 outline-primary md:h-20 md:w-20">
            <span>حلال</span>
            <span className="max-md:text-xs">Halal</span>
          </div>
        </Link>

        <div
          className={`${isOpen ? "block" : "max-md:opacity-0"} absolute top-25 left-0 z-50 flex w-full flex-col items-center justify-center gap-4 bg-white p-4 transition-all duration-300 ease-in-out md:static md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0`}
        >
          <Link href={routes.home} className="hover:underline">
            Home
          </Link>
          <Link href={routes.menu} className="hover:underline">
            Menu
          </Link>
          <Link href={routes.grocery} className="hover:underline">
            Grocery
          </Link>
          <Link href={routes.catering} className="hover:underline">
            Catering
          </Link>
          <Link href={routes.contact} className="hover:underline">
            Contact
          </Link>
          <SocialMediaLinks />
        </div>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-2xl">{isOpen ? "✖" : "☰"}</button>
        </div>
      </nav>
    </>
  );
}

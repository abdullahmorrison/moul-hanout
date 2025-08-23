"use client";
import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import routes from "@/lib/routes";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="relative flex shrink-0 items-center justify-between bg-secondary p-4 text-2xl font-bold text-primary shadow-md">
        <Link href="/" className="text-lg">
          <div className="flex h-15 w-15 flex-col items-center justify-center rounded-[50%] border-2 border-white bg-primary p-2 text-white outline-2 outline-primary md:h-20 md:w-20">
            <span>حلال</span>
            <span className="max-md:text-xs">Halal</span>
          </div>
        </Link>

        <div
          className={`${isOpen ? "block" : "max-md:opacity-0"} absolute top-20 left-0 z-50 flex w-full flex-col items-center justify-center gap-4 bg-white p-4 transition-all duration-300 ease-in-out md:static md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0`}
        >
          <Link
            href={routes.home}
            className={`${pathname === routes.home ? "text-primary-dark" : undefined} hover:text-primary-dark`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href={routes.menu}
            className={`${pathname === routes.menu ? "text-primary-dark" : undefined} hover:text-primary-dark`}
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            href={routes.grocery}
            className={`${pathname === routes.grocery ? "text-primary-dark" : undefined} hover:text-primary-dark`}
            onClick={() => setIsOpen(false)}
          >
            Grocery
          </Link>
          <Link
            href={routes.catering}
            className={`${pathname === routes.catering ? "text-primary-dark" : undefined} hover:text-primary-dark`}
            onClick={() => setIsOpen(false)}
          >
            Catering
          </Link>
          <Link
            href={routes.contact}
            className={`${pathname === routes.contact ? "text-primary-dark" : undefined} hover:text-primary-dark`}
            onClick={() => setIsOpen(false)}
          >
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

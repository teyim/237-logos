"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, MenuIcon, XIcon } from "lucide-react";
import Logo from "@public/logo.svg";
import { Button } from "./ui/button";
import Searchbox from "./Searchbox";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8  inset-x-0 top-0 z-50"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5 flex space-x-3 items-center">
          <Image className="h-10 w-auto" alt="logo" src={Logo} />
        </Link>
      </div>
      {/**Mobile hamburger menu icon button start*/}
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-baseline justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {/**Mobile hamburger menu icon button end*/}
      <div className="hidden lg:flex lg:gap-x-12">
        <Searchbox />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="https://github.com/teyim/237-logos" prefetch={false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </Link>
      </div>

      {/** add mobile menu*/}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bg-black p-4 h-[170px] z-50">
          <div className="flex justify-end">
            {/* Close button */}
            <button
              type="button"
              className=" text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="w-full my-6">
            <Searchbox />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

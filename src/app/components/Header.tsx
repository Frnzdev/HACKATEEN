"use client";

import Image from "next/image";
import Link from "next/link";
import CountrySelector from "./ContrySelector";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-500 backdrop-blur-md p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/Logo_Refugio.png"
            alt="Logo"
            width={100}
            height={100}
            className="max-w-full"
          />
        </div>

        {/* Menu Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-white">
            {/* Ícone do Menu (Hamburger) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu para telas grandes */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-white font-semibold p-2">
            <li className="transition hover:underline hover:scale-110">
              <Link href="/">Início</Link>
            </li>
            <li className="transition hover:underline hover:scale-110">
              <Link href="/">Notícias</Link>
            </li>
            <li className="transition hover:underline hover:scale-110">
              <SignedOut>
                <SignInButton mode="modal">
                  <span className="transition hover:underline hover:scale-110">
                    Login
                  </span>
                </SignInButton>
              </SignedOut>
            </li>
          </ul>

          {/* Country Selector */}
          <div className="flex items-center">
            <CountrySelector />
          </div>

          {/* Auth buttons */}
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Visível apenas em telas pequenas) */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-4">
          <ul className="text-white font-semibold">
            <li className="transition hover:underline hover:scale-110">
              <Link href="/">Início</Link>
            </li>
            <li className="transition hover:underline hover:scale-110">
              <Link href="/">Notícias</Link>
            </li>
            <li className="transition hover:underline hover:scale-110">
              <SignedOut>
                <SignInButton mode="modal">
                  <span className="transition hover:underline hover:scale-110">
                    Login
                  </span>
                </SignInButton>
              </SignedOut>
            </li>
          </ul>

          {/* Country Selector (opcional no mobile) */}
          <div className="flex items-center">
            <CountrySelector />
          </div>
        </div>
      )}
    </header>
  );
}

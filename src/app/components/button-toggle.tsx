"use client";

import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  titulo: string;
}

export default function ButtonToggle({ titulo }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:border dark:border-white dark:bg-black dark:hover:bg-gray-200 dark:hover:text-black transition duration-200"
      >
        {titulo}
      </button>

      {isOpen && (
        <div className="flex justify-center absolute mt-2 right-0 w-48 bg-white dark:bg-zinc-800 shadow-lg rounded-md z-50">
          <ul className="text-black dark:text-white font-semibold p-2 space-y-2">
            <li className="hover:bg-blue-100 dark:hover:bg-zinc-700 px-4 py-2 rounded transition">
              <Link href="/">Moeda</Link>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-zinc-700 px-4 py-2 rounded transition">
              <Link href="/">Temperatura</Link>
            </li>
            <li className="hover:bg-blue-100 dark:hover:bg-zinc-700 px-4 py-2 rounded transition">
              <Link href="/">Medidas</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

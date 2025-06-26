"use client";
import React from "react";

interface Ibutton {
  children: React.ReactNode;
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Recharge({ children, onClick }: Ibutton) {
  return (
    <div>
      <button
        className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-400"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

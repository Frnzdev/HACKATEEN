// components/BackToTopButton.tsx
"use client"; // Adicionando a diretiva 'use client'

import { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // O botão aparece após 200px de rolagem
      } else {
        setIsVisible(false); // O botão desaparece quando está no topo
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-800 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 focus:outline-none z-999 duration-150 dark:bg-zinc-900 dark:hover:bg-gray-400 dark:hover:text-black cursor-pointer"
        aria-label="Voltar ao topo"
      >
        <ArrowUpCircle size={24} />
      </button>
    )
  );
}

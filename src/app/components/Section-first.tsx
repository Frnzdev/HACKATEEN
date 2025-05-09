"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ButtonLink from "./Button";

export default function SectionFirst() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  // Fechar o menu ao clicar fora
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  //mudar idioma

  return (
    <section className="overflow-x-hidden w-full min-h-screen flex items-center bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-6xl">
        {/* Texto */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h1 className="text-3xl font-bold mb-4">Juntos por um Recomeço</h1>
          <p className="text-lg leading-relaxed mb-6">
            <br />
            ajudando na adaptação, integração e construção de uma nova vida com
            dignidade.
            <br />
            Oferecemos orientação, cursos, acolhimento e oportunidades.
            <br />
            <strong>Refúgio é um direito. Recomeçar é possível.</strong>
          </p>

          {/* Botões abaixo do texto */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start relative w-full">
            <div className="relative" ref={menuRef}>
              <button
                onClick={handleClick}
                className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-500 text-center dark:bg-black/50 dark:text-white dark:border dark:border-white dark:hover:bg-gray-200 duration-200 dark:hover:text-black"
              >
                Conversão
              </button>

              {isOpen && (
                <div className="absolute top-14 z-10 left-0 w-64 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-lg shadow-lg p-4 animate-fade-in">
                  <h3 className="font-semibold text-lg mb-3 text-left text-gray-800 dark:text-white">
                    Tipos de Conversão:
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="#conversor"
                        className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-white"
                      >
                        Conversor de Moeda
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#medidas"
                        className="block w-full text-left px-4 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-white"
                      >
                        Temperatura, Peso e Comprimento
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <ButtonLink linkRoute="#localizacao" linkTitle="Onde estou?" />
            <ButtonLink linkRoute="#informacoes" linkTitle="Informações" />
          </div>
        </div>

        {/* Imagem visível apenas em telas md+ */}
        <div
          data-aos="fade-left"
          className="hidden md:flex w-full md:w-1/2 justify-center"
        >
          <Image
            src="/Celular.png"
            alt="Celular na mão"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

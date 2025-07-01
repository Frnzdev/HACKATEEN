"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector"; // Corrigido o nome do componente importado
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import ThemeSwitcher from "./themeSwitcher";
import ListaLi from "./ListaLi";
import { useTranslation } from "react-i18next"; // 1. Importar o hook de tradução

export default function Header() {
  const { t } = useTranslation(); // 2. Iniciar o hook para obter a função 't'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-blue-500 backdrop-blur-md p-4 shadow-md dark:bg-zinc-800">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src="/Logo_Lar.png"
                width={100}
                height={100}
                style={{ width: "100%", height: "auto" }}
                alt="Logo"
                className="max-w-full"
              />
            </Link>
          </div>

          {/* Menu Mobile Toggle */}
          <div className="flex md:hidden flex-col items-end space-y-2">
            {/* Switch no topo */}
            <ThemeSwitcher />

            {/* Linha com UserButton e botão de menu */}
            <div className="flex items-center space-x-4">
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-12 h-12", // tamanho aumentado
                    },
                  }}
                />
              </SignedIn>

              <button
                onClick={toggleMenu}
                className="text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-zinc-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8" // Botão maior
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
          </div>

          {/* Menu para telas grandes */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6 text-white font-semibold p-2">
              {/* 3. Substituir textos fixos por chaves de tradução */}
              <ListaLi linkRoute="/" liTitle={t('Header.home')} />
              <ListaLi linkRoute="/noticias" liTitle={t('Header.news')} />
              <ListaLi linkRoute="/guia" liTitle={t('Header.guide')} />
              <li className="transition hover:underline hover:scale-110 cursor-pointer">
                <SignedOut>
                  <SignInButton mode="modal">
                    <span className="transition hover:underline hover:scale-110">
                      {t('Header.login')}
                    </span>
                  </SignInButton>
                </SignedOut>
              </li>
              <li className="transition hover:underline hover:scale-110">
                {isSignedIn && <Link href="/restricted">{t('Header.restricted_area')}</Link>}
              </li>
            </ul>

            {/* Language Selector + Theme Switcher */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <div className="p-4">
                <ThemeSwitcher />
              </div>
            </div>

            {/* User Button */}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Menu Mobile (Visível apenas em telas pequenas) */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-300 border border-blue-950 rounded-md backdrop-blur p-4 space-y-4 dark:bg-zinc-600 dark:border-none">
            <ul className="text-white font-semibold">
              <ListaLi linkRoute="/" liTitle={t('Header.home')} />
              <ListaLi linkRoute="/noticias" liTitle={t('Header.news')} />
              <ListaLi linkRoute="/guia" liTitle={t('Header.guide')} />
              <li className="transition hover:underline hover:scale-110">
                <SignedOut>
                  <SignInButton mode="modal">
                    <span className="transition hover:underline hover:scale-110">
                      {t('Header.login')}
                    </span>
                  </SignInButton>
                </SignedOut>
              </li>
              <li className="transition hover:underline hover:scale-110">
                {isSignedIn && (
                  <Link
                    href="/restricted"
                    className="block py-2 px-4 text-white"
                  >
                    {t('Header.restricted_area')}
                  </Link>
                )}
              </li>
            </ul>

            {/* Language Selector (opcional no mobile) */}
            <div className="flex items-center">
              <LanguageSelector />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
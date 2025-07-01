"use client"; // ESSA LINHA É A MAIS IMPORTANTE

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next"; // Importe o hook

export default function Footer() {
  const { t } = useTranslation(); // Inicie o hook
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 dark:bg-zinc-800 backdrop-blur-md p-4 shadow-md text-white py-8">
      <div className="max-w-6xl items-center mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Image src={"/Logo_Lar.png"} alt="Logo" width={300} height={400} />
        <div>
          <h2 className="text-xl font-bold text-white">{t('Footer.lar_title')}</h2>
          <p className="mt-2 text-sm">{t('Footer.lar_subtitle')}</p>
        </div>

        {/* Links úteis */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{t('Footer.useful_links')}</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                {t('Footer.home')}
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline">
                {t('Footer.about_us')}
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline">
                {t('Footer.contact')}
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:underline">
                {t('Footer.terms_of_use')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{t('Footer.follow_us')}</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mt-8 text-center text-xs text-gray-200">
        {t('Footer.all_rights_reserved', { year: currentYear })}
      </div>
    </footer>
  );
}
"use client";
import { useState } from "react";
import { Info, Phone } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const OpenMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        <button
          onClick={OpenMenu}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer"
          aria-label={t('Help.button_label')}
        >
          <Phone size={24} />
          <Info size={24} />
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-72 sm:w-80 md:w-96 bg-white dark:bg-zinc-600 shadow-xl rounded-lg z-50">
          <h2 className="m-4 font-bold text-black dark:text-white text-lg">
            {t('Help.emergency_title')}
          </h2>
          <ul className="text-black dark:text-white font-semibold px-4 pb-4 space-y-2">
            <Link href="tel:190">
              <li className="hover:bg-blue-100 dark:hover:bg-zinc-700 px-4 py-2 rounded transition">
                {t('Help.police')}
              </li>
            </Link>
            <Link href="tel:192">
              <li className="hover:bg-blue-100 dark:hover:bg-zinc-700 px-4 py-2 rounded transition">
                {t('Help.samu')}
              </li>
            </Link>
            <Link href="tel:193">
              <li className="hover:bg-blue-100 dark:hover:bg-zinc-700 px-4 py-2 rounded transition">
                {t('Help.firefighters')}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
"use client";
import Image from "next/image";
import ButtonLink from "./Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function SectionFirst() {
  const { t } = useTranslation();

  return (
    <section className="overflow-x-hidden w-full min-h-screen flex items-center bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-6xl">
        {/* Texto */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <h1 className="text-3xl font-bold mb-4">{t('SectionFirst.title')}</h1>
          <p className="text-lg leading-relaxed mb-6">
            <br />
            {t('SectionFirst.description')}
            <br />
            <strong>{t('SectionFirst.right_to_refuge')}</strong>
          </p>

          {/* Botões abaixo do texto */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start relative w-full">
            <div className="relative">
              <Link href='/conversoes'>
                <button
                  className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-500 text-center cursor-pointer dark:bg-black/50 dark:text-white dark:border dark:border-white dark:hover:bg-gray-200 duration-200 dark:hover:text-black"
                >
                  {t('SectionFirst.conversion_button')}
                </button>
              </Link>
            </div>
            <ButtonLink linkRoute="/localizacao" linkTitle={t('SectionFirst.where_am_i_button')} />
            <ButtonLink linkRoute="/guia" linkTitle={t('SectionFirst.information_button')} />
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
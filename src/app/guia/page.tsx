"use client";
import { useTranslation } from "react-i18next";
import Info from "../components/Info";

export default function RefugeeGuide() {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="guide"
        className="w-full min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-r from-white to-blue-400 dark:from-black dark:to-black "
      >
        <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-white mb-6 text-center">
            {t('Guide.page_title')}
          </h1>

          <p className="mb-4">
            {t('Guide.intro_paragraph')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_1_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_1_content')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_2_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_2_content')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_3_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_3_content')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_4_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_4_content')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_5_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_5_content')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_6_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_6_content')}
          </p>

          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
            {t('Guide.section_7_title')}
          </h2>
          <p className="mb-4">
            {t('Guide.section_7_content')}
          </p>

          <p className="mt-8 italic text-sm text-gray-600 dark:text-gray-400">
            {t('Guide.disclaimer')}
          </p>
        </div>
      </section>
      <Info />
    </>
  );
}
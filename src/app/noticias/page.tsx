"use client";

import Link from "next/link";
import { useNews } from "../hooks/useNews";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";
import Image from "next/image"; // Importar o componente Image

export default function News() {
  const { articles, loading, refetch } = useNews();
  const { t } = useTranslation();

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      id="news"
      className="news-container min-h-screen py-10 bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black/90"
    >
      <h1 className="text-center font-bold text-3xl text-blue-900 dark:text-white mb-8">
        {t('News.page_title')}
      </h1>

      {articles.length === 0 ? (
        <p className="text-center text-red-600 dark:text-red-400">
          {t('News.no_news_found')}
        </p>
      ) : (
        <div
          data-aos="fade-up"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="news-item bg-white p-5 rounded-lg shadow-lg dark:bg-zinc-800 dark:text-white overflow-hidden transform hover:scale-105 transition-all duration-200"
            >
              <Link href={`/noticias/${encodeURIComponent(article.article_id)}`}>
                {article.image_url ? (
                  <div className="relative w-full h-40 mb-3">
                    <Image
                      src={article.image_url}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                ) : (
                  <div className="mb-3 w-full h-40 flex items-center justify-center bg-gray-200 dark:bg-zinc-700 text-gray-500 dark:text-gray-400 rounded">
                    {t('News.no_image')}
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-blue-900 dark:text-white">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {t('News.click_for_details')}
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-12">
        <button
          onClick={refetch}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          {t('News.update_news')}
        </button>
      </div>
    </div>
  );
}
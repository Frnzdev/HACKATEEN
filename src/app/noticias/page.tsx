"use client";

import Link from "next/link";
import { useNews } from "../hooks/useNews";
import Loading from "@/components/Loading";
import Recharge from "../components/Recharge";


export default function News() {
  const { articles, loading, refetch } = useNews();


  if (loading) {
    return <Loading />;
  }

  return (
    <div
      id="news"
      className="news-container py-10 bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black/90"
    >
      <h1 className="text-center font-bold text-3xl text-blue-900 dark:text-white mb-8">
        Notícias sobre Refugiados
      </h1>

      {articles.length === 0 ? (
        <p className="text-center text-red-600 dark:text-red-400">
          Nenhuma notícia encontrada.
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
              <Link
                href={`/noticias/${encodeURIComponent(article.article_id)}`}
              >
                {article.image_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.image_url ? article.image_url : "No images"}
                    alt={article.title}
                    className="mb-3 w-full h-40 object-cover rounded"
                  />
                )}
                <h2 className="text-xl font-semibold mb-2 text-blue-900 dark:text-white">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  Clique para ver os detalhes
                </p>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-12">
        <Recharge onClick={refetch}>Atualizar as Noticias</Recharge>
      </div>
    </div>
  );
}

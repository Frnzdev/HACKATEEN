"use client";

import { useNews } from "@/app/hooks/useNews";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DetailSNews() {
  const { articles, loading } = useNews();
  const { id } = useParams();

  if (loading) {
    return <Loading />;
  }

  const article = articles.find((a) => a.article_id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500 text-xl">
        Notícia não encontrada.
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 md:px-24 bg-gradient-to-br from-white to-blue-100 dark:from-black dark:to-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden border dark:border-zinc-700">
        <div className="flex flex-col md:flex-row items-start p-6 gap-6">
          {article.image_url && (
            <div className="relative w-full md:w-64">
              {/* Imagem */}
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />

              {/* Botão embaixo da imagem (somente em telas md+) */}
              {article.link && (
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block mt-4 text-center px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition w-full"
                >
                  Leia mais na fonte
                </a>
              )}
            </div>
          )}

          {/* Conteúdo da notícia */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 mb-3">
              {article.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
              {article.description || "Sem descrição disponível."}
            </p>

            {/* Botão visível apenas em telas menores */}
            {article.link && (
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block md:hidden mt-4 text-center px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition w-full"
              >
                Leia mais na fonte
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

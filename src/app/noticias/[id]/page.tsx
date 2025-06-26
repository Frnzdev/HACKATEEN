"use client";

import Recharge from "@/app/components/Recharge";
import { useNews } from "@/app/hooks/useNews";
import Loading from "@/components/Loading";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function DetailSNews() {
  const { articles, loading } = useNews();
  const { id } = useParams();
  const router = useRouter();

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
        {/* Botão de voltar */}
        <div className="p-4">
          <Recharge onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={6}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Recharge>
        </div>

        {/* Imagem em cima */}
        {article.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full h-64 object-cover rounded-t-2xl shadow-md"
          />
        )}

        {/* Conteúdo abaixo da imagem */}
        <div className="p-6 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-300 mb-4">
            {article.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
            {article.description || "Sem descrição disponível."}
          </p>

          {/* Botão Leia mais */}
          {article.link && (
            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition max-w-max"
            >
              Leia mais na fonte
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

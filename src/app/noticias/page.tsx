"use client";

import { fetchNews, NewsProps } from "@/api/news";
import { useState, useEffect } from "react";

export default function News() {
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setArticles(data.results); // <-- Pega os artigos retornados da API
        if (data && Array.isArray(data.results)) {
          setArticles(data.results);
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setArticles([]);
      } finally {
        setLoading(false); // <-- Para de mostrar o loading, independente de erro ou sucesso
      }
    };

    getNews(); // Chama a função quando o componente monta
  }, []); // <-- Array vazio = roda apenas 1 vez quando o componente for montado

  return (
    <div
      id="news"
      className="news-container py-10 bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black/90"
    >
      <h1 className="text-center font-bold text-3xl text-blue-900 dark:text-white mb-8">
        Notícias sobre Refugiados
      </h1>

      {loading ? (
        <p className="text-center text-gray-700 dark:text-gray-300">
          Carregando notícias...
        </p>
      ) : articles.length === 0 ? (
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
              <img src={article.image_url} alt={article.title} />
              <h2 className="text-xl font-semibold mb-2 text-blue-900 dark:text-white">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {article.description}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Leia mais
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

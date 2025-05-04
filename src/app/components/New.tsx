"use client";

import { useState, useEffect } from "react";

// Tipo para os artigos retornados pela API
type Article = {
  title: string;
  description: string;
  link: string;
};

const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;

const fetchNews = async (): Promise<Article[]> => {
  try {
    const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=refugiados&language=pt`;
    const response = await fetch(url);
    const data = await response.json();

    if (Array.isArray(data.results)) {
      // Filtra apenas artigos com título e descrição válidos
      return data.results.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) => item.title && item.description && item.link
      ) as Article[];
    } else {
      console.error("Formato inesperado da resposta:", data);
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const news = await fetchNews();
      setArticles(news);
      setLoading(false);
    };

    getArticles();
  }, []);

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

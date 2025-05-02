"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Defina o tipo Article com os campos usados pela NewsData.io
type Article = {
  title: string;
  description: string;
  image_url: string;
  link: string;
};

const API_KEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY; // Certifique-se de definir esta variável de ambiente

const fetchNews = async (): Promise<Article[]> => {
  const url = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=refugiados&language=pt`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results as Article[];
};

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const news = await fetchNews();
      setArticles(news);
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="news-item bg-white p-5 rounded-lg shadow-lg dark:bg-zinc-800 dark:text-white overflow-hidden transform hover:scale-105 transition-all duration-200"
          >
            {article.image_url && (
              <Image
                src={article.image_url}
                alt={article.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
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
    </div>
  );
}

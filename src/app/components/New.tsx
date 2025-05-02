"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Definir o tipo Article com os campos usados pela News API
type Article = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
};

const API_KEY = "9f0559e983de46e2bb4613d48628ed55";

// Função para buscar as notícias usando a News API
const fetchNews = async (): Promise<Article[]> => {
  const url = `https://newsapi.org/v2/everything?q=refugiados&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const articles = data.articles as Article[];

  // Extrair domínios das URLs de imagem
  const domains = articles
    .map((article) => new URL(article.urlToImage).hostname)
    .filter((hostname, index, self) => self.indexOf(hostname) === index); // Remover duplicados

  console.log(domains); // Exibir todos os domínios encontrados

  return articles;
};

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);

  // Carregar as notícias ao montar o componente
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
            {article.urlToImage && (
              <Image
                src={article.urlToImage}
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
              href={article.url}
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

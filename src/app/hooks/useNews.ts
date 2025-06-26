"use client";

import { useState, useEffect } from "react";
import { fetchNews, NewsProps } from "@/api/news";

export function useNews() {
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    setLoading(true);
    try {
      const data = await fetchNews();
      if (data && Array.isArray(data.results)) {
        setArticles(data.results);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return { articles, loading, refetch: getNews }; // 👈 Adiciona o `refetch`
}

"use client";

import { useState, useEffect } from "react";
import { fetchNews, NewsProps } from "@/api/news";

export function useNews() {
  const [articles, setArticles] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
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

    getNews();
  }, []);

  return { articles, loading };
}

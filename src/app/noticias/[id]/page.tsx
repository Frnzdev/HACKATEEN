import { fetchNews, NewsProps } from "@/api/news";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DetailSNews() {
  const [news, setNews] = useState<NewsProps | null>();
  const { id } = useParams();

  useEffect(() => {
    const getNews = async () => {
        const data = await = fetchNews();
        const news = data.results.find((n) => n.article_id === id)
    }
  })

  return <div></div>;
}

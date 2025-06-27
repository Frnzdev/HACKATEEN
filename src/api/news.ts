export interface NewsProps {
  article_id: string;
  title: string;
  image_url: string;
  description: string;
  link: string;
}

interface NewsApiResponse {
  results: NewsProps[];
}

export const fetchNews = async (): Promise<NewsApiResponse> => {
  const res = await fetch(
    "https://newsdata.io/api/1/latest?apikey=pub_7cb1233e86614bde8dfba325752b04f6&qInTitle=Refugiados&language=pt"
  );
  const data: NewsApiResponse = await res.json();
  return data;
};

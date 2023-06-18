"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import httpClient from "@/http";
import NewsList from "./Form";
import { useEffect, useState } from "react";
import { Article } from "@/http/responseModels";

export default function NewsPage() {
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    httpClient.getArticles().then(articles => {
      setNews(articles);
    })
  }, []);

  return (
    <main>
      <Header />
      <NewsList news={news}/>
      <Footer />
    </main>
  );
}

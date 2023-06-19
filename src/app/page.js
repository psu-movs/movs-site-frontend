"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import News from "@/components/news/News";
import VocationalTest from "@/components/VocationalTest";
import httpClient from "@/http";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    httpClient.getArticles().then(articles => {
      setNews(articles);
    })
  }, [])

  return (
    <main>
      <Header />
      <VocationalTest />
      {news.length !== 0 && <News news={news}/>}
      <Footer />
    </main>
  );
}

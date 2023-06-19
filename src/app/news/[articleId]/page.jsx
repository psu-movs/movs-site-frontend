"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import httpClient from "@/http";
import Article from "./Article";
import { useEffect, useState } from "react";

export default function ArticlePage({params}) {
  const [article, setArticle] = useState();

  useEffect(() => {
    httpClient.getArticle(params.articleId).then(fetchedArticle => {
      setArticle(fetchedArticle);
    })
  }, []);

  return (
    <main>
      <Header />
      {article && <Article data={article} />}
      <Footer />
    </main>
  );
}

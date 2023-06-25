import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import httpClient from "@/http";
import Article from "./Article";

export default async function ArticlePage({params}) {
  const article = await httpClient.getArticle(params.articleId)

  return (
    <main>
      <Header />
      {article && <Article data={article} />}
      <Footer />
    </main>
  );
}

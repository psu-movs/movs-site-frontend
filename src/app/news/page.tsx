import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import httpClient from "@/http";
import NewsList from "./NewsList";

export default async function NewsPage() {
  const news = await httpClient.getArticles()

  return (
    <main>
      <Header />
      <NewsList news={news}/>
      <Footer />
    </main>
  );
}

export const revalidate = 0;
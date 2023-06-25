import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import News from "@/components/news/News";
import VocationalTest from "@/components/VocationalTest";
import httpClient from "@/http";

export default async function Home() {
 const news = await httpClient.getArticles();
  return (
    <main>
      <Header />
      <VocationalTest />
      {news.length !== 0 && <News news={news}/>}
      <Footer />
    </main>
  );
}

export const revalidate = 0;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import News from "@/components/news/News";
import VocationalTestPreview from "@/components/VocationalTestPreview";
import httpClient from "@/http";

export default async function Home() {
 const news = await httpClient.getArticles();
  return (
    <main>
      <Header />
      <VocationalTestPreview />
      {news.length !== 0 && <News news={news}/>}
      <Footer />
    </main>
  );
}

export const revalidate = 0;
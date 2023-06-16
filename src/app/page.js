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
      <News news={news}/>
      <Footer />
    </main>
  );
}

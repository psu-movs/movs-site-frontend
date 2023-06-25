import httpClient from "@/http";
import ScienceWorks from "./Form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function DepartmentPage() {
  const works = await httpClient.getScienceWorks()

  return (
    <main>
      <Header />
      <ScienceWorks works={works}/>
      <Footer />
    </main>
  );
}

export const revalidate = 0;
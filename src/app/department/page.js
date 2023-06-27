import httpClient from "@/http";
import Department from "./Department";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function DepartmentPage() {
  const data = await httpClient.getDepartmentInfo()
  const head = await httpClient.getDepartmentHead()

  return (
    <main>
      <Header />
      <Department data={data} head={head}/>
      <Footer />
    </main>
  );
}

export const revalidate = 0;
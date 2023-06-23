import httpClient from "@/http";
import Department from "./Form";
import { Header } from "@/components/Header";

export default async function DepartmentPage() {
  const data = await httpClient.getDepartmentInfo()
  const head = await httpClient.getDepartmentHead()

  return (
    <main>
      <Header />
      <Department data={data} head={head}/>
    </main>
  );
}

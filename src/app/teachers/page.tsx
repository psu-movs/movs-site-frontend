import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import httpClient from "@/http";
import { parseTeachers } from "@/app/teachers/getTeachers";
import TeacherTable from "@/app/teachers/TeacherContainer";


export default async function TeachersPage() {
  const teachers = parseTeachers(await httpClient.getTeachers());
  return (
    <main>
      <Header />
        <TeacherTable teachers={teachers} />
      <Footer />
    </main>
  );
}

export const revalidate = 0;

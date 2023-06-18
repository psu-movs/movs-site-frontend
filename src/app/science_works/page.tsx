"use client";

import { useEffect, useState } from "react";
import httpClient from "@/http";
import ScienceWorks from "./Form";
import { ScienceWork } from "@/http/responseModels";
import { Header } from "@/components/Header";

export default function DepartmentPage() {
  const [ works, setWorks ] = useState<ScienceWork[]>([]);

  useEffect(() => {
    httpClient.getScienceWorks().then(works => {
      setWorks(works);
    })
  }, []);

  return (
    <main>
      <Header />
      <ScienceWorks works={works}/>
    </main>
  );
}

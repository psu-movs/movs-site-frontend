"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import httpClient from "@/http";
import Applicants from "./Form";
import { useEffect, useState } from "react";
import { Company } from "@/http/responseModels";

export default function ApplicantsPage() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    httpClient.getApplicantsCompanies().then(companies => {
      setCompanies(companies);
    })
  }, []);

  return (
    <main>
      <Header />
      <Applicants companies={companies} />
      <Footer />
    </main>
  );
}

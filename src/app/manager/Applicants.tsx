"use client";

import ApplicantsCompanies from "./components/ApplicantsCompanies";
import httpClient from "@/http";
import UpdateEntryInfoForm from "@/app/manager/components/UpdateEntryInfoForm";
import { useEffect, useState } from "react";
import { Company, EntryInfo } from "@/http/responseModels";

export default function Applicants() {
  const [companies, setCompanies] = useState<Company[]>();
  const [entryInfo, setEntryInfo] = useState<EntryInfo>();

  const fetchData = async () => {
    setCompanies(await httpClient.getApplicantsCompanies());
    setEntryInfo(await httpClient.getApplicantsEntryInfo());
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!companies || !entryInfo) return;
  console.log(entryInfo)
  return (
    <>
      <ApplicantsCompanies companies={companies} />
      <UpdateEntryInfoForm info={entryInfo} />
    </>
  );
}

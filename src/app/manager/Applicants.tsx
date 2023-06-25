"use client";

import ApplicantsCompanies from "./components/ApplicantsCompanies";
import httpClient from "@/http";
import UpdateEntryInfoForm from "@/app/manager/components/UpdateEntryInfoForm";
import { useEffect, useState } from "react";
import { Company, EntryInfo, UserPermissions } from "@/http/responseModels";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";

export default function Applicants() {
  const router = useRouter();
  const { user } = useAuth();
  const [companies, setCompanies] = useState<Company[]>();
  const [entryInfo, setEntryInfo] = useState<EntryInfo>();

  const fetchData = async () => {
    setCompanies(await httpClient.getApplicantsCompanies());
    setEntryInfo(await httpClient.getApplicantsEntryInfo());
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (
      (user.permissions & UserPermissions.manageInfo) !==
      UserPermissions.manageInfo
    ) {
      router.push("/manager");
      return;
    }
  }, [user]);

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

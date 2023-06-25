"use client";

import { useEffect, useState } from "react";
import HeadInfo from "@/app/manager/HeadInfo";
import httpClient from "@/http";
import { DepartmentHeadInfo, DepartmentInfo, UserPermissions } from "@/http/responseModels";
import Department from "@/app/manager/Department";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";

export default function DepartmentContainer() {
  const router = useRouter();
  const [head, setHead] = useState<DepartmentHeadInfo>();
  const [info, setInfo] = useState<DepartmentInfo>();
  const { user } = useAuth();

  const fetchData = async () => {
    const [depInfo, headInfo] = await Promise.all([httpClient.getDepartmentInfo(), httpClient.getDepartmentHead()])
    setInfo(depInfo);
    setHead(headInfo);
  }

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
    fetchData()
  }, [])

  return (
    <>
      {head && <HeadInfo data={head}/>}
      {info && <Department data={info} />}
    </>
  )
}
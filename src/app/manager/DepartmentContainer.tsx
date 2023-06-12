import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import HeadInfo from "@/app/manager/HeadInfo";
import httpClient from "@/http";
import { DepartmentHeadInfo, DepartmentInfo } from "@/http/responseModels";
import Department from "@/app/manager/Department";

export default function DepartmentContainer() {
  const [head, setHead] = useState<DepartmentHeadInfo>();
  const [info, setInfo] = useState<DepartmentInfo>();

  const fetchData = async () => {
    const [depInfo, headInfo] = await Promise.all([httpClient.getDepartmentInfo(), httpClient.getDepartmentHead()])
    setInfo(depInfo);
    setHead(headInfo);
  }

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
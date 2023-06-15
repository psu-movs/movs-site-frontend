"use client";

import { useEffect, useState } from "react";
import httpClient from "@/http";
import Department from "./Form";

export default function DepartmentPage() {
  const [ data, setData ] = useState();
  const [ head, setHead ] = useState();

  useEffect(() => {
    const getData = async () => {
      setData(await httpClient.getDepartmentInfo());
      setHead(await httpClient.getDepartmentHead());
    };
    getData();
  }, []);

  if (!data || !head) 
    return;

  return (
    <main>
      <Department data={data} head={head}/>
    </main>
  );
}

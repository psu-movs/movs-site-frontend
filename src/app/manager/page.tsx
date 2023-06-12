"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import ControlPanel from "@/app/manager/ControlPanel";
import { ClientUser } from "@/http/responseModels";
import httpClient from "@/http";
import NewsContainer from "@/app/manager/NewsContainer";
import useMediaQuery from "@mui/material/useMediaQuery";
import DepartmentContainer from "@/app/manager/DepartmentContainer";

export default function ManagerPage() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("active");

  const [user, setUser] = useState<ClientUser>();

  const fetchUser = async () => {
    const response = await httpClient.getMe();
    if (!response || (response && response.error)) {
      push("/login");
    }
    if (response.permissions === 0) {
      push("/");
    }
    setUser(response);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return;

  return (
    <main>
      <Container maxWidth={"lg"}>
        <ControlPanel user={user} />
        <Divider />
        {active === "news" && <NewsContainer />}
        {active === "department" && <DepartmentContainer />}
      </Container>
    </main>
  );
}

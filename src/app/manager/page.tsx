"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ControlPanel from "@/app/manager/ControlPanel";
import { ClientUser } from "@/http/responseModels";
import httpClient from "@/http";
import NewsContainer from "@/app/manager/NewsContainer";

export default function ManagerPage() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get('active');

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
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ControlPanel user={user} />
        </Grid>
        <Grid item xs={8}>
          {active === 'news' && <NewsContainer />}
        </Grid>
      </Grid>
    </main>
  );
}

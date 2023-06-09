"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ControlPanel from "@/app/manager/ControlPanel";
import { ClientUser } from "@/http/responseModels";
import httpClient from "@/http";

export default function ManagerPage() {
  const { push } = useRouter();
  const [user, setUser] = useState<ClientUser>();

  const fetchUser = async () => {
    const response = await httpClient.getMe();
    if (response.error) {
      push("/login");
    }
    setUser(response)
  }

  useEffect(() => {
    fetchUser()
  }, []);

  if (!user) return;

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ControlPanel user={user} />
        </Grid>
      </Grid>
    </main>
  );
}

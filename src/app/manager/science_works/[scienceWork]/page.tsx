"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import { useAuth } from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import UpdateScienceWorkForm from "./UpdateScienceWorkForm";
import { useEffect, useState } from "react";
import httpClient from "@/http";
import { ScienceWork } from "@/http/responseModels";

export default function UpdateScienceWorkPage({
  params,
}: {
  params: { scienceWork: string };
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [scienceWork, setScienceWork] = useState<ScienceWork>();

  if (!user) {
    router.push("/login");
    return;
  }

  if (user.permissions === 0) {
    router.push("/");
  }

  useEffect(() => {
    httpClient.getScienceWorks().then((scienceWorks) => {
      setScienceWork(scienceWorks.find((scienceWork => scienceWork._id === params.scienceWork)));
    });
  }, []);

  if (!scienceWork) return;

  return (
    <main>
      <ControlPanel user={user} />
      <UpdateScienceWorkForm scienceWork={scienceWork} />
    </main>
  );
}

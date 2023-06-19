"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import { useAuth } from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import CreateScienceWorkForm from "./CreateScienceWorkForm";

export default function ArticlePage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return;
  }

  if (user.permissions === 0) {
    router.push("/");
  }

  return (
    <main>
      <ControlPanel user={user} />
      <CreateScienceWorkForm />
    </main>
  );
}

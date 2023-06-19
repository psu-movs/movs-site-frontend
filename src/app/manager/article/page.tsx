"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import { useAuth } from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import CreateArticleForm from "./CreateArticleForm";
import { useEffect } from "react";

export default function ArticlePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (user.permissions === 0) {
      router.push("/");
    }
  }, []);

  if (!user) return;

  return (
    <main>
      <ControlPanel user={user} />
      <CreateArticleForm />
    </main>
  );
}

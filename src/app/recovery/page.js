"use client";

import RecoveryForm from "./Form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/app/context/useAuth";

export default function RecoveryPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/manager");
    }
  }, [user]);

  return (
    <main>
      <RecoveryForm />
    </main>
  );
}

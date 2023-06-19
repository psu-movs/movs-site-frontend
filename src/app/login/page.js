"use client";

import LoginForm from "./Form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";
import { useEffect } from "react";

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/manager");
    }
  }, []);

  return (
    <main>
      <LoginForm />
    </main>
  );
}

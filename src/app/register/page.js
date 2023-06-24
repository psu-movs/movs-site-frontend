"use client";

import RegisterForm from "./Form";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";
import { useEffect } from "react";

export default function RegisterPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/manager");
    }
  }, [user]);

  return (
    <main>
      <RegisterForm />
    </main>
  );
}

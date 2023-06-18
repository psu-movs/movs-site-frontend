"use client";

import LoginForm from "./Form";
import { useRouter } from 'next/navigation'
import { useAuth } from "@/app/context/useAuth";

export default function LoginPage() {
  const {user} = useAuth();
  const router = useRouter();

  if (user) {
    router.push("/manager")
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}

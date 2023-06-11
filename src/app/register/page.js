"use client"

import LoginForm from "./Form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import isAuthorized from "@/utils/checkAuthorized";

export default function RegisterPage() {
  const { push } = useRouter();

  useEffect(() => {
    isAuthorized().then((res) => {
      if (res) push("/manager");
    });
  }, []);

  return (
    <main>
      <LoginForm />
    </main>
  );
}

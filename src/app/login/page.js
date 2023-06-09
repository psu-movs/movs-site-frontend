"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import LoginForm from "./Form";
import isAuthorized from "@/utils/checkAuthorized";

export default function LoginPage() {
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

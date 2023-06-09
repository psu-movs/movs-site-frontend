import LoginForm from "./Form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import isAuthorized from "@/utils/checkAuthorized";

export default function AuthPage() {
  const { push } = useRouter();

  useEffect(() => {
    isAuthorized().then((res) => {
      if (res) push("/panel");
    });
  }, []);

  return (
    <main>
      <LoginForm />
    </main>
  );
}

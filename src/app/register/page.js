import LoginForm from "./Form";
import { redirect } from "next/navigation";
import httpClient from "@/http";

export default async function RegisterPage() {
  const response = await httpClient.getMe();
  if (response && !response.error) {
    redirect('/manager');
    return;
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}

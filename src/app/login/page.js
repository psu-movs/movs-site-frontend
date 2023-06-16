import LoginForm from "./Form";
import httpClient from "@/http";
import { redirect } from 'next/navigation'

export default async function LoginPage() {
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

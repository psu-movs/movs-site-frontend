import RecoveryForm from "./Form";
import { redirect } from "next/navigation";
import httpClient from "@/http";

export default async function RecoveryPage() {
  const response = await httpClient.getMe();

  if (response && !response.error) {
    redirect('/manager');
    return;
  }

  return (
    <main>
      <RecoveryForm />
    </main>
  );
}

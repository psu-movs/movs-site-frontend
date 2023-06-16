import { redirect } from 'next/navigation'

import httpClient from "@/http";

import Manager from "@/app/manager/Manager";

export default async function ManagerPage({ searchParams }) {
  const active = searchParams.get("active");
  const response = await httpClient.getMe();

  if (!response || (response && response.error)) {
    redirect("/login");
  }
  if (response.permissions === 0) {
    redirect("/");
  }

  return (
    <main>
      <Manager user={response} active={active} />
    </main>
  );
}

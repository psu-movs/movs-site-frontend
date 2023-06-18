"use client";

import { useRouter } from 'next/navigation'

import httpClient from "@/http";

import Manager from "@/app/manager/Manager";

export default async function ManagerPage({ searchParams }) {
  const active = searchParams.get('active');
  const response = await httpClient.getMe();
  const router = useRouter();

  if (!response || (response && response.error)) {
    router.push("/login");
  }
  if (response.permissions === 0) {
    router.push("/");
  }

  return (
    <main>
      <Manager user={response} active={active} />
    </main>
  );
}

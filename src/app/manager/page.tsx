"use client";

import { useRouter } from 'next/navigation'

import Manager from "@/app/manager/Manager";
import { useAuth } from "@/app/context/useAuth";

export default function ManagerPage({ searchParams }: {searchParams: {active: string}}) {
  const { user } = useAuth();
  const router = useRouter();

  const active = searchParams.active;

  if (!user) {
    router.push("/login");
    return;
  }

  if (user.permissions === 0) {
    router.push("/");
  }

  return (
    <main>
      <Manager user={user} active={active} />
    </main>
  );
}

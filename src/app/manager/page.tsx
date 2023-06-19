"use client";

import { useRouter } from "next/navigation";

import Manager from "@/app/manager/Manager";
import { useAuth } from "@/app/context/useAuth";
import { useEffect } from "react";

export default function ManagerPage({
  searchParams,
}: {
  searchParams: { active: string };
}) {
  const { user } = useAuth();
  const router = useRouter();
  const active = searchParams.active;

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (user.permissions === 0) {
      router.push("/");
    }
  }, []);

  if (!user) return;

  return (
    <main>
      <Manager user={user} active={active} />
    </main>
  );
}

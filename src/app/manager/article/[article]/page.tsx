"use client";

import ControlPanel from "@/app/manager/ControlPanel";
import { useAuth } from "@/app/context/useAuth";
import { useRouter } from "next/navigation";
import UpdateArticleForm from "./UpdateArticleForm";
import { useEffect, useState } from "react";
import httpClient from "@/http";
import { Article } from "@/http/responseModels";

export default function AddArticle({
  params,
}: {
  params: { article: string };
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [article, setArticle] = useState<Article>();

  if (!user) {
    router.push("/login");
    return;
  }

  if (user.permissions === 0) {
    router.push("/");
  }

  useEffect(() => {
    httpClient.getArticle(params.article).then((article) => {
      setArticle(article);
    });
  }, []);

  if (!article) return;

  return (
    <main>
      <ControlPanel user={user} />
      <UpdateArticleForm article={article} />
    </main>
  );
}

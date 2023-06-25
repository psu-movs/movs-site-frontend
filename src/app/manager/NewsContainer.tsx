"use client";

import { useEffect, useState } from "react";
import httpClient from "@/http";
import { Article, UserPermissions } from "@/http/responseModels";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";

function ArticleCard({
  article,
  onDelete,
}: {
  article: Article;
  onDelete(article: Article): Promise<void>;
}) {
  const router = useRouter();

  return (
    <Card sx={{ padding: "1%" }}>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography>{article.creation_date}</Typography>
        <Typography>{article.author_id}</Typography>
      </Stack>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography variant={"h6"}>
          <Link href={`/news/${article._id}`} underline={"none"}>
            {article.title}
          </Link>
        </Typography>

        <Stack direction={"row"}>
          <IconButton
            aria-label="edit"
            onClick={() => {
              router.push(`/manager/article/${article._id}`);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(article)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}

export default function NewsContainer() {
  const router = useRouter();
  const [news, setNews] = useState<Article[]>([]);
  const { user } = useAuth();

  const deleteArticle = async (deletedArticle: Article) => {
    await httpClient.deleteArticle(deletedArticle._id);

    setNews(news.filter((article) => article._id !== deletedArticle._id));
  };

  const fetchNews = async () => {
    const articles = await httpClient.getArticles();
    setNews(articles);
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (
      (user.permissions & UserPermissions.manageNews) !==
        UserPermissions.manageNews ||
      (user.permissions & UserPermissions.administrator) !==
        UserPermissions.administrator
    ) {
      router.push("/manager");
      return;
    }

    if (news.length === 0) {
      fetchNews();
    }
  }, [user]);

  return (
    <Box>
      <Container>
        <Button
          onClick={() => {
            router.push("/manager/article");
          }}
        >
          Добавить статью
        </Button>

        <Stack spacing={2}>
          {news.map((article) => (
            <ArticleCard
              key={article._id}
              article={article}
              onDelete={deleteArticle}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

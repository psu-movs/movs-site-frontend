"use client";

import { useEffect, useState } from "react";
import httpClient from "@/http";
import { Article } from "@/http/responseModels";
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

import AddArticleModal from "@/app/manager/AddArticleModal";
import UpdateArticleModal from "@/app/manager/UpdateArticleModal";

function ArticleCard({
  article,
  onDelete,
}: {
  article: Article;
  onDelete(article: Article): Promise<void>;
}) {
  const [editModalOpened, setEditModalOpened] = useState<boolean>(false);

  return (
    <>
      <UpdateArticleModal
        isOpened={editModalOpened}
        onClose={() => setEditModalOpened(false)}
        article_id={article._id}
      />
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
              onClick={() => setEditModalOpened(true)}
            >
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => onDelete(article)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default function NewsContainer() {
  const [news, setNews] = useState<Article[]>([]);
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const deleteArticle = async (deletedArticle: Article) => {
    await httpClient.deleteArticle(deletedArticle._id);

    setNews(news.filter((article) => article._id !== deletedArticle._id));
  };

  const fetchNews = async () => {
    const articles = await httpClient.getArticles();
    setNews(articles);
    console.log(articles);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Box>
      <Container>
        <Button onClick={openModal}>Добавить статью</Button>

        <AddArticleModal isOpened={modalOpened} onClose={closeModal} />

        <Stack spacing={2}>
          {news.map((article) => (
            <ArticleCard
              key={article.title}
              article={article}
              onDelete={deleteArticle}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

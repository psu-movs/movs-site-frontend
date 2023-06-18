"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  TextField,
  Input,
  Button,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import httpClient from "@/http";

interface AddArticleModalProps {
  article_id: string;
  isOpened: boolean;
  onClose(): void;
}

export default function UpdateArticleModal({
  article_id,
  isOpened,
  onClose,
}: AddArticleModalProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageFile, setImageFile] = useState<File>();

  const fetchArticle = async () => {
    const article = await httpClient.getArticle(article_id);
    setTitle(article.title);
    setDescription(article.description)
  }

  useEffect(() => {
    if (isOpened)
      fetchArticle();
  }, [isOpened])

  const updateArticle = async () => {
    if (!title || !description) {
      alert("Введите все поля");
      return;
    }

    const res = await httpClient.updateArticle(
      article_id,
      {
      title,
      description,
      image: imageFile,
    });
    onClose();
  };

  return (
    <Modal
      open={isOpened}
      onClose={onClose}
      keepMounted
      sx={{ overflow: "scroll" }}
    >
      <Container
        maxWidth={"md"}
        sx={{
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
          <Typography variant={"h4"}>Добавление новой статьи</Typography>
          <TextField
            id="title"
            label="Название статьи"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setTitle(element.target.value.trim())}
            value={title}
          />
          <TextField
            id="description"
            label="Описание статьи"
            variant="outlined"
            multiline
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setDescription(element.target.value.trim())}
            value={description}
          />

          <Input
            type={"file"}
            onChange={(element) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              setImageFile(element.target.files[0]);
            }}
          />
          <Button
            onClick={updateArticle}
            disabled={!title || !description}
          >
            Обновить
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
}

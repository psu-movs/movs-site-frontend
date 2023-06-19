"use client";

import { useEffect, useState } from "react";
import {
  TextField,
  Input,
  Button,
  Stack,
  Container,
  Typography,
} from "@mui/material";
import httpClient from "@/http";
import { Article } from "@/http/responseModels";
import { useRouter } from "next/navigation";

export default function UpdateArticleForm({ article }: { article: Article }) {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [descriptionPreview, setDescriptionPreview] = useState<string>("");
  const [imageFile, setImageFile] = useState<File>();

  useEffect(() => {
    setTitle(article.title);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setDescription(article.description);
  })

  const updateArticle = async () => {
    if (!title || !description || !descriptionPreview) {
      alert("Введите все поля");
      return;
    }

    await httpClient.updateArticle(article._id, {
      title,
      description,
      descriptionPreview,
      image: imageFile,
    });

    router.push('/manager?active=news');
  };

  return (
    <Container
      maxWidth={"md"}
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
        <Typography variant={"h4"}>Изменение статьи</Typography>
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
        <TextField
          id="description_preview"
          label="Подводка к описанию"
          variant="outlined"
          multiline
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setDescriptionPreview(element.target.value.trim())}
        />

        <Typography variant={'h5'}>
          Изображение
        </Typography>

        <Input
          type={"file"}
          onChange={(element) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setImageFile(element.target.files[0]);
          }}
        />
        <Button onClick={updateArticle} disabled={!title || !description}>
          Обновить
        </Button>
      </Stack>
    </Container>
  );
}

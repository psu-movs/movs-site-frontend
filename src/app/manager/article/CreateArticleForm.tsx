import { useState } from "react";
import httpClient from "@/http";
import { Button, Container, Input, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CreateArticleForm() {
  const router = useRouter();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [descriptionPreview, setDescriptionPreview] = useState<string>();
  const [imageFile, setImageFile] = useState<File>();

  const addArticle = async () => {
    if (!title || !description || !descriptionPreview || !imageFile) {
      alert("Введите все поля");
      return;
    }

    await httpClient.addArticle({
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
          <Typography variant={'h4'}>Добавление новой статьи</Typography>
          <TextField
            id="title"
            label="Название статьи"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setTitle(element.target.value.trim())}
          />
          <TextField
            id="description"
            label="Описание статьи"
            variant="outlined"
            multiline
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setDescription(element.target.value.trim())}
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
          <Button
            onClick={addArticle}
            disabled={!title || !description || !imageFile}
          >
            Добавить статью
          </Button>
        </Stack>
      </Container>
  )
}
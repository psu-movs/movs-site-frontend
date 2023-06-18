"use client";

import { useState } from "react";
import {
  Modal,
  TextField,
  Input,
  Button,
  Stack,
  Container, Typography
} from "@mui/material";
import httpClient from "@/http";

interface AddArticleModalProps {
  isOpened: boolean;
  onClose(): void;
}

export default function AddArticleModal({
  isOpened,
  onClose,
}: AddArticleModalProps) {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [imageFile, setImageFile] = useState<File>();

  const addArticle = async () => {
    if (!title || !description || !imageFile) {
      alert("Введите все поля");
      return;
    }

    await httpClient.addArticle({
      title,
      description,
      image: imageFile,
    });
    setTitle(undefined);
    setDescription(undefined);
    setImageFile(undefined);
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
    </Modal>
  );
}

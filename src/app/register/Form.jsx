"use client";

import {
  Button,
  Container,
  Link,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import httpClient from "@/http";
import { useState } from "react";
import AuthErrorModal from "@/components/authErrorModal";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const { push } = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onButtonClick = async () => {
    const response = await httpClient.register(username.trim(), email.trim(), password.trim());

    if (response.error) {
      setErrorMessage(response.error.message);
      return;
    }

    push("/panel");
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
      display="flex"
    >
      <Container maxWidth={"xs"}>
        <Stack spacing={3}>
          <AuthErrorModal text={errorMessage} />

          <Link href={"../"}>
            <img src={"/logo.svg"} alt={"logo"} width={"60%"} />
          </Link>

          <Typography variant="h4">Регистрация</Typography>

          <TextField
            id="username"
            label="Имя пользователя"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setUsername(element.target.value)}
          />

          <TextField
            id="email"
            label="Электронная почта"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setEmail(element.target.value)}
          />
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type={"password"}
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setPassword(element.target.value)}
          />

          <Button
            variant="contained"
            size={"large"}
            sx={{ boxShadow: 0, textTransform: "none" }}
            onClick={onButtonClick}
            disabled={!username || !email || !password}
          >
            Зарегистрироваться
          </Button>

          <Box justifyContent={"center"} alignItems={"center"} display="flex">
            <Typography variant={"body2"} sx={{ color: "#616263" }}>
              У вас уже есть аккаунт?{" "}
              <Link href={"./login"} underline={"none"}>
                Войти!
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

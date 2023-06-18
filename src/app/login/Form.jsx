"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Box,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link"

import AuthErrorModal from "@/components/authErrorModal";
import httpClient from "@/http";

export default function LoginForm() {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onButtonClick = async () => {
    const response = await httpClient.login(email, password);

    if (response && response.error) {
      setErrorMessage(response.error.message);
      return;
    }

    push("/manager")
  }

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

          <div style={{width: '60%'}}>
            <Link href={"/"}>
              <img src={"/logo.svg"} alt={"logo"}/>
            </Link>
          </div>

          <Typography variant="h4">Добро пожаловать</Typography>

          <TextField
            id="email"
            label="Электронная почта"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setEmail(element.target.value.trim())}
          />
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type={"password"}
            sx={{ backgroundColor: "#FFFFFF" }}
            onChange={(element) => setPassword(element.target.value.trim())}
          />

          <Stack
            direction="row"
            spacing={10}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked size={"medium"} />}
                label={
                  <Typography variant={"body2"}>Запомнить меня</Typography>
                }
              />
            </FormGroup>

            <Typography variant={"body2"}>
              <Link href={"./recovery"} underline={"none"}>
                Забыли пароль?{" "}
              </Link>
            </Typography>
          </Stack>

          <Button
            variant="contained"
            size={"large"}
            sx={{ boxShadow: 0, textTransform: "none" }}
            onClick={onButtonClick}
            disabled={!email || !password}
          >
            Войти
          </Button>

          <Box justifyContent={"center"} alignItems={"center"} display="flex">
            <Typography variant={"body2"} sx={{ color: "#616263" }}>
              У вас еще нет аккаунта?{" "}
              <Link href={"./register"} underline={"none"}>
                Зарегистрироваться!
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

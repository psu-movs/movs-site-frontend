"use client";

import {
  Button,
  Container,
  Link,
  Box,
  Stack,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

export default function LoginForm() {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
      display="flex"
    >
      <Container maxWidth={"xs"}>
        <Stack spacing={3}>
          <img src={"/logo.svg"} alt={"logo"} width={"60%"} />

          <Typography variant="h4">Добро пожаловать</Typography>

          <TextField
            id="email"
            label="Электронная почта"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
          />
          <TextField
            id="password"
            label="Пароль"
            variant="outlined"
            type={"password"}
            sx={{ backgroundColor: "#FFFFFF" }}
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

            <Link href={"#"} underline={"none"}>
              <Typography variant={"body2"}>Забыли пароль?</Typography>
            </Link>
          </Stack>

          <Button variant="contained" size={"large"} sx={{ boxShadow: 0, textTransform: 'none' }}>
            Войти
          </Button>

          <Box justifyContent={"center"} alignItems={"center"} display="flex">
            <Typography variant={"body2"} sx={{color: '#616263'}}>
              У вас еще нет аккаунта?{" "}
              <Link href={"#"} underline={"none"}>
                Зарегистрироваться!
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

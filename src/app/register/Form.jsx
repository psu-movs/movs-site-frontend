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

export default function RegisterForm() {
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

          <Typography variant="h4">Регистрация</Typography>

          <TextField
            id="username"
            label="Имя пользователя"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
          />

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

          <Button variant="contained" size={"large"} sx={{ boxShadow: 0, textTransform: 'none'}}>
            Зарегистрироваться
          </Button>

          <Box justifyContent={"center"} alignItems={"center"} display="flex">
            <Typography variant={"body2"} sx={{color: '#616263'}}>
              У вас уже есть аккаунт? {" "}
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

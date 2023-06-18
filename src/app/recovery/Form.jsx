"use client";

import {
  Button,
  Container,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link"

export default function RecoveryForm() {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      minHeight="100vh"
      display="flex"
    >
      <Container maxWidth={"xs"}>
        <Stack spacing={3}>
          <div style={{width: '60%'}}>
            <Link href={"/"}>
              <Image src={"/logo.svg"} alt={"logo"}/>
            </Link>
          </div>

          <Typography variant="h4">Восстановление пароля</Typography>

          <TextField
            id="email"
            label="Электронная почта"
            variant="outlined"
            sx={{ backgroundColor: "#FFFFFF" }}
          />

          <Button variant="contained" size={"large"} sx={{ boxShadow: 0, textTransform: 'none' }}>
            Отправить письмо на почту
          </Button>

          <Box justifyContent={"center"} alignItems={"center"} display="flex">
            <Typography variant={"body2"} sx={{color: '#616263'}}>
              <Link href={"./login"} underline={"none"}>
                Вернуться назад
              </Link>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

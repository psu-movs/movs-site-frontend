"use client";

import { Button, Container, Link, Box, Stack, Typography } from "@mui/material";

import Image from "next/image";

const HeaderLink = ({ text }) => (
  <Typography variant={"body2"}>
    <Link underline={"none"} sx={{ color: "#000" }}>
      {text}
    </Link>
  </Typography>
);

function Header() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#f5f5fe",
        height: "5%",
        paddingTop: "1%",
        paddingLeft: "3%",
        paddingRight: "3%",
        marginBottom: "2%",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="/logo.svg" width={230} height={60} alt={"logo"} />
        <Stack direction="row" spacing={3}>
          <HeaderLink text={"Абитуриентам"} />
          <HeaderLink text={"Студентам"} />
          <HeaderLink text={"Научные работы"} />
          <HeaderLink text={"Кафедра"} />
        </Stack>
        <Typography variant={"body2"} sx={{ width: 60 }}>
          <Link href={"/login"} underline={"none"}>
            Войти
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
}

function ProfessionalTest() {
  return (
    <Container maxWidth={"xl"}>
      <Stack justifyContent="space-between" alignItems="left">
        <img src="/earth.svg" alt={"earth"} />
        <Stack
          position={"absolute"}
          justifyContent="space-between"
          sx={{ padding: "7%" }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
            border={1}
            borderColor={"#FFFFFF"}
            width="205px"
            height="35px"
            borderRadius="40px"
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography color={"#ffffff"} fontSize={10} variant={"body1"}>
                ПРОФФЕСИОНАЛЬНЫЙ ТЕСТ
              </Typography>
            </Stack>
          </Box>
          <Box maxWidth={"sm"}>
            <Typography color={"#ffffff"} variant={"body2"} fontSize={44}>
              Добро пожаловать в мир науки
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#fd5600", width: "222px", height: "56px" }}
          >
            Пройти
          </Button>
          <Typography
            variant={"body1"}
            fontSize={16}
            color={"#ffffff"}
            paddingTop={"4%"}
          >
            Пройдите небольшой тест, чтобы узнать подходит ли вам данная
            кафедра.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <ProfessionalTest />
    </main>
  );
}

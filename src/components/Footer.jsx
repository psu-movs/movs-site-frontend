"use client";

import { Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderLink = ({ text, href }) => (
  <Typography variant={"body2"}>
    <Link underline={"none"} sx={{ color: "#000" }} href={href}>
      {text}
    </Link>
  </Typography>
);
const FooterLink = ({ text, href }) => (
  <Typography variant={"body2"}>
    <Link underline={"none"} sx={{ color: "rgba(4, 5, 5, 0.8)" }} href={href}>
      {text}
    </Link>
  </Typography>
);

export function Footer() {
  const isMobile = useMediaQuery("(max-width:480px)");
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#f5f5fe",
        paddingTop: "1%",
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingBottom: "2%",
        marginTop: '2%'
      }}
    >
      <Stack
        direction={isMobile ? 'column' : "row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction={"column"}
          justifyContent="space-between"
          alignItems="left"
          spacing={4}
          sx={{ paddingLeft: "4%" }}
        >
          <Image src="/logo.svg" width={150} height={40} alt={"logo"} />
          <Stack direction={"row"} spacing={3}>
            <Stack direction={"column"}>
              <Typography
                variant="body1"
                color={"rgba(4, 5, 5, 0.8)"}
                fontSize={12}
              >
                Электронная почта
              </Typography>
              <Typography variant="body2">lab.movs@gmail.com</Typography>
            </Stack>
            <Stack direction={"column"}>
              <Typography
                variant="body1"
                color={"rgba(4, 5, 5, 0.8)"}
                fontSize={12}
              >
                Номер телефона
              </Typography>
              <Typography variant="body2">+8 (342) 239-67-72</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={isMobile ? 'column' : "row"} spacing={6}>
          <Stack drirection="column" spacing={1}>
            <HeaderLink text={"Абитуриентам"} />
            <FooterLink text={"Компании"} />
            <FooterLink text={"Специальности"} />
            <FooterLink text={"Поступление"} />
          </Stack>
          <Stack drirection="column" spacing={1}>
            <HeaderLink text={"Студентам"} />
            <FooterLink text={"Информация"} />
            <FooterLink text={"Олимпиады"} />
            <FooterLink text={"Учебный процесс"} />
          </Stack>
          <Stack drirection="column" spacing={1}>
            <HeaderLink text={"Аспирантам"} />
            <FooterLink text={"Информамция"} />
            <FooterLink text={"Доп. программы"} />
            <FooterLink text={"Правовые акты"} />
          </Stack>
          <Stack drirection="column" spacing={1}>
            <HeaderLink text={"Сотрудникам"} href={"/department"} />
            <FooterLink text={"Информация"} />
            <FooterLink text={"Квалификация"} />
          </Stack>
          <Stack drirection="column" spacing={1}>
            <HeaderLink text={"Кафедра"} />
            <FooterLink text={"Контактные данные"} />
            <FooterLink text={"Сотрудники"} />
            <FooterLink text={"О кафедре"} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

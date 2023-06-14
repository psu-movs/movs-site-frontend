'use client'

import { Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HeaderLink = ({ text, href }) => (
  <Typography variant={"body2"}>
    <Link underline={"none"} sx={{ color: "#000" }} href={href}>
      {text}
    </Link>
  </Typography>
);

export function Header() {
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
          <HeaderLink text={"Кафедра"} href={'/department'}/>
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
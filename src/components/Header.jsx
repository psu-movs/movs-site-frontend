"use client";

import { Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import DrawerMenu from "@/app/manager/DrawerMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

const HeaderLink = ({ text, href }) => (
  <Typography variant={"body2"}>
    <Link underline={"none"} sx={{ color: "#000" }} href={href}>
      {text}
    </Link>
  </Typography>
);

const Menu = ({direction}) => (
  <Stack direction={direction} spacing={3}>
    <HeaderLink text={"Абитуриентам"} />
    <HeaderLink text={"Студентам"} />
    <HeaderLink text={"Научные работы"} />
    <HeaderLink text={"Кафедра"} href={"/department"} />
  </Stack>
);

const HeaderMenu = ({ drawer }) => {
  if (!drawer) return <Menu direction={'row'}/>;

  return (
    <DrawerMenu>
      <Container sx={{marginTop: '10%'}}>
        <Menu direction={'column'}/>
      </Container>
    </DrawerMenu>
  );
};

export function Header() {
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#f5f5fe",
        height: "5%",
        paddingTop: "1%",
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingBottom: '1%',
        marginBottom: "1%",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        {isPhone && <HeaderMenu drawer />}
        <Link href={'/'}>
          <Image src="/logo.svg" width={230} height={60} alt={"logo"} />
        </Link>
        {!isPhone && <HeaderMenu />}
        <Typography variant={"body2"} sx={{ width: 60 }}>
          <Link href={"/login"} underline={"none"}>
            Войти
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
}

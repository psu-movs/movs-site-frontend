"use client";

import { Stack, Typography, Container } from "@mui/material";
import { ClientUser } from "@/http/responseModels";
import {
  hasManageInfoPermission,
  hasManageNewsPermission,
  isAdmin,
} from "@/utils/userPermissions";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerMenu from "@/app/manager/DrawerMenu";
import { TypographyProps } from "@mui/material/Typography";
import Link from "next/link";

const HeaderLink = ({ text, href, textVariant }) => (
  <Link href={href}>
    <Typography variant={textVariant} sx={{ textDecoration: "none" }}>
      {text}
    </Typography>
  </Link>
);

function Menu({
  user,
  direction,
  textVariant,
}: {
  user: ClientUser;
  direction?: "row";
  textVariant: TypographyProps["variant"];
}) {
  return (
    <Stack spacing={2} direction={direction} sx={{ justifyContent: "center" }}>
      {hasManageNewsPermission(user) && (
        <HeaderLink
          text="Новости"
          href={"/manager?active=news"}
          textVariant={textVariant}
        />
      )}

      {hasManageInfoPermission(user) && (
        <>
          <HeaderLink
            text="Кафедра"
            href={"/manager?active=department"}
            textVariant={textVariant}
          />
          <HeaderLink
            text="Абитуриентам"
            href={"/manager?active=applicants"}
            textVariant={textVariant}
          />
        </>
      )}

      {isAdmin(user) && (
        <HeaderLink
          text="Пользователи"
          href={"/manager?active=users"}
          textVariant={textVariant}
        />
      )}
    </Stack>
  );
}

export default function ControlPanel({ user }: { user: ClientUser }) {
  const isTablet = useMediaQuery("(max-width:960px)");

  if (isTablet) {
    return (
      <DrawerMenu>
        <Container sx={{ marginTop: "10%" }}>
          <Menu user={user} textVariant={"body2"} />
        </Container>
      </DrawerMenu>
    );
  }

  return <Menu user={user} direction={"row"} textVariant={"h6"} />;
}

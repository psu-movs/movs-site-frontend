"use client";

import { Stack, Typography, Link, Container } from "@mui/material";
import { ClientUser } from "@/http/responseModels";
import {
  hasManageInfoPermission,
  hasManageNewsPermission,
  hasManageTeachersPermission,
  isAdmin,
} from "@/utils/userPermissions";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerMenu from "@/app/manager/DrawerMenu";
import { TypographyProps } from "@mui/material/Typography";

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
    <Stack spacing={2} direction={direction} sx={{justifyContent: 'center'}}>
      {hasManageNewsPermission(user) && (
        <Typography>
          <Link underline={"none"} variant={textVariant} href={"?active=news"}>
            Новости
          </Link>
        </Typography>
      )}

      {hasManageTeachersPermission(user) && (
        <Typography>
          <Link
            underline={"none"}
            variant={textVariant}
            href={"?active=teachers"}
          >
            Преподаватели
          </Link>
        </Typography>
      )}

      {hasManageInfoPermission(user) && (
        <>
          <Typography>
            <Link
              underline={"none"}
              variant={textVariant}
              href={"?active=department"}
            >
              Кафедра
            </Link>
          </Typography>
          <Typography>
            <Link
              underline={"none"}
              variant={textVariant}
              href={"?active=applicants"}
            >
              Абитуриентам
            </Link>
          </Typography>
          <Typography>
            <Link
              underline={"none"}
              variant={textVariant}
              href={"?active=students"}
            >
              Студентам
            </Link>
          </Typography>
        </>
      )}

      {isAdmin(user) && (
        <Typography>
          <Link underline={"none"} variant={textVariant} href={"?active=users"}>
            Пользователи
          </Link>
        </Typography>
      )}
    </Stack>
  );
}

export default function ControlPanel({ user }: { user: ClientUser }) {
  const isTablet = useMediaQuery("(max-width:960px)");

  if (isTablet) {
    return (
      <DrawerMenu>
        <Container sx={{marginTop: '10%'}}>
          <Menu user={user} textVariant={"body2"} />
        </Container>
      </DrawerMenu>
    );
  }

  return (
    <Menu
      user={user}
      direction={"row"}
      textVariant={ "h6"}
    />
  );
}

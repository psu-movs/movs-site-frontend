"use client";

import { Stack, Typography, Link } from "@mui/material";
import { ClientUser } from "@/http/responseModels";
import {
  hasManageInfoPermission,
  hasManageNewsPermission,
  hasManageTeachersPermission,
  isAdmin,
} from "@/utils/userPermissions";

export default function ControlPanel({ user }: { user: ClientUser }) {
  return (
    <Stack spacing={2}>
      {hasManageNewsPermission(user) && (
        <Typography>
          <Link href={"?active=news"}>Новости</Link>
        </Typography>
      )}

      {hasManageTeachersPermission(user) && (
        <Typography>
          <Link href={"?active=teachers"}>Преподаватели</Link>
        </Typography>
      )}

      {hasManageInfoPermission(user) && (
        <>
          <Typography>
            <Link href={"?active=department"}>Информация о кафедре</Link>
          </Typography>
          <Typography>
            <Link href={"?active=applicants"}>Абитуриентам</Link>
          </Typography>
          <Typography>
            <Link href={"?active=students"}>Студентам</Link>
          </Typography>
        </>
      )}

      {isAdmin(user) && (
        <Typography>
          <Link href={"?active=users"}>Пользователи</Link>
        </Typography>
      )}
    </Stack>
  );
}

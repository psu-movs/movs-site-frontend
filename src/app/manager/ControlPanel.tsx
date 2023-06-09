"use client";

import { Stack, Typography, Link } from "@mui/material";
import { ClientUser, UserPermissions } from "@/http/responseModels";

export default function ControlPanel({ user }: { user: ClientUser }) {
  const isAdmin = user.permissions & UserPermissions.administrator;
  const hasManageNewsPermission =
    user.permissions & UserPermissions.manageNews || isAdmin;
  const hasManageTeachersPermission =
    user.permissions & UserPermissions.manageTeachers || isAdmin;
  const hasManageInfoPermission =
    user.permissions & UserPermissions.manageInfo || isAdmin;

  return (
    <Stack spacing={2}>
      {hasManageNewsPermission && (
        <Typography>
          <Link>Новости</Link>
        </Typography>
      )}

      {hasManageTeachersPermission && (
        <Typography>
          <Link>Преподаватели</Link>
        </Typography>
      )}

      {hasManageInfoPermission && (
        <>
          <Typography>
            <Link>Информация о кафедре</Link>
          </Typography>
          <Typography>
            <Link>Абитуриентам</Link>
          </Typography>
          <Typography>
            <Link>Студентам</Link>
          </Typography>
        </>
      )}

      {isAdmin && (
        <Typography>
          <Link>Пользователи</Link>
        </Typography>
      )}
    </Stack>
  );
}

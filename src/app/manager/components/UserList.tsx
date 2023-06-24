"use client";

import { User, UserPermissions } from "@/http/responseModels";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useEffect, useState } from "react";
import httpClient from "@/http";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";

const permissions = {
  "Управлять новостями": UserPermissions.manageNews,
  "Управлять информацией": UserPermissions.manageInfo,
  "Администратор": UserPermissions.administrator,
};

const UserCard = (params: { user: User }) => {
  const router = useRouter();
  const [user, setUser] = useState<User>(params.user);
  const authContext = useAuth();

  const updateUserPermissions = async (permission: UserPermissions) => {
    let permissions = user.permissions;

    if ((permissions & permission) === permission) {
      permissions -= permission;
    } else {
      permissions |= permission;
    }

    await httpClient.updateUserPermissions(user._id, permissions);
    setUser({ ...user, permissions });

    if (
      authContext.user?._id === user._id &&
      (user.permissions & UserPermissions.administrator) !==
        UserPermissions.administrator
    ) {
      router.push("/manager");
    }
  };

  return (
    <Card sx={{ padding: "1%" }}>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography>{user.email}</Typography>
      </Stack>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography variant={"h6"}>{user.username}</Typography>

        <Stack direction={"row"}>
          <FormGroup>
            {Object.entries(permissions).map(([name, permission]) => (
              <FormControlLabel
                key={name}
                control={
                  <Checkbox
                    checked={(user.permissions & permission) === permission}
                    onChange={() => updateUserPermissions(permission)}
                    size={"medium"}
                  />
                }
                label={<Typography variant={"body2"}>{name}</Typography>}
              />
            ))}
          </FormGroup>
        </Stack>
      </Stack>
    </Card>
  );
};

export default function UserList({ users }: { users: User[] }) {
  const {user} = useAuth();
  const router = useRouter();

  // Невозможно поставить в родительский компонент. Так как он серверный, а useAuth используется только в клиентских :(
  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    }

    if (
      (user.permissions & UserPermissions.administrator) !==
      UserPermissions.administrator
    ) {
      router.push("/manager");
    }
  }, [user]);

  return (
    <Box>
      <Stack spacing={2}>
        {users.map((user) => (
          <UserCard user={user} key={user._id} />
        ))}
      </Stack>
    </Box>
  );
}

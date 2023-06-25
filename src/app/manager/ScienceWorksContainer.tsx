"use client";

import { useEffect, useState } from "react";
import httpClient from "@/http";
import { ScienceWork, UserPermissions } from "@/http/responseModels";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/useAuth";

function ScienceWorkCard({
  scienceWork,
  onDelete,
}: {
  scienceWork: ScienceWork;
  onDelete(scienceWork: ScienceWork): Promise<void>;
}) {
  const router = useRouter();

  return (
    <Card sx={{ padding: "1%" }}>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography variant={"h6"}>
          <Link href={`/news/${scienceWork._id}`} underline={"none"}>
            {scienceWork.title}
          </Link>
        </Typography>

        <Stack direction={"row"}>
          <IconButton
            aria-label="edit"
            onClick={() => {
              router.push(`/manager/science_works/${scienceWork._id}`);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(scienceWork)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}

export default function ScienceWorksContainer() {
  const router = useRouter();
  const { user } = useAuth();
  const [scienceWorks, setScienceWorks] = useState<ScienceWork[]>([]);

  const deleteScienceWork = async (deleted: ScienceWork) => {
    await httpClient.deleteArticle(deleted._id);

    setScienceWorks(
      scienceWorks.filter((scienceWork) => scienceWork._id !== deleted._id)
    );
  };

  const fetchNews = async () => {
    setScienceWorks(await httpClient.getScienceWorks());
  };

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (
      (user.permissions & UserPermissions.manageInfo) !==
        UserPermissions.manageInfo ||
      (user.permissions & UserPermissions.administrator) !==
        UserPermissions.administrator
    ) {
      router.push("/manager");
      return;
    }
  }, [user]);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Box>
      <Container>
        <Button
          onClick={() => {
            router.push("/manager/science_works");
          }}
        >
          Добавить новую научную работу
        </Button>

        <Stack spacing={2}>
          {scienceWorks.map((scienceWork) => (
            <ScienceWorkCard
              key={scienceWork._id}
              scienceWork={scienceWork}
              onDelete={deleteScienceWork}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

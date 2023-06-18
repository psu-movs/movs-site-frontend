"use client";

import { Button, Container, Input, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DepartmentHeadInfo } from "@/http/responseModels";
import Image from "next/image";
import httpClient from "@/http";
import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";

function EditHeadInfo({ data }: { data: DepartmentHeadInfo }) {
  const router = useRouter();

  const [name, setName] = useState(data.full_name);
  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [file, setFile] = useState<File>();

  const saveInfo = async () => {
    await httpClient.updateDepartmentHead({
      phone,
      email,
      address,
      full_name: name,
      photo: file,
    });

    router.refresh();
  };

  return (
    <Container maxWidth={'md'}>
      <Stack spacing={2}>
        <TextField
          id="name"
          label="ФИО"
          variant="outlined"
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setName(element.target.value)}
          value={name}
        />
        <TextField
          id="address"
          label="Расположение"
          variant="outlined"
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setAddress(element.target.value)}
          value={address}
        />
        <TextField
          id="phone"
          label="Номер телефона"
          variant="outlined"
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setPhone(element.target.value)}
          value={phone}
        />
        <TextField
          id="email"
          label="Электронная почта"
          variant="outlined"
          sx={{ backgroundColor: "#FFFFFF" }}
          onChange={(element) => setEmail(element.target.value)}
          value={email}
        />
        <Input
          type={"file"}
          onChange={(element) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setFile(element.target.files[0]);
          }}
        />

        <Button
          onClick={saveInfo}
          disabled={!name || !phone || !address || !email}
          variant="contained"
        >
          Сохранить
        </Button>
      </Stack>
    </Container>
  );
}

export default function HeadInfo({ data }: { data: DepartmentHeadInfo }) {
  const isTablet = useMediaQuery("(max-width:960px)");

  return (
    <Stack spacing={2}>
      <Typography variant={"h4"}>
        Редактирование и.о. заведующего кафедрой
      </Typography>

      <Stack direction={isTablet ? "column" : 'row'} spacing={2}>
        <Image
          src={data.photo_url}
          alt={"department_head_image"}
          width={250}
          height={250}
        />

        <EditHeadInfo data={data} />
      </Stack>
    </Stack>
  );
}

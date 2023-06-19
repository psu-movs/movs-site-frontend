"use client";

import { DepartmentInfo } from "@/http/responseModels";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import httpClient from "@/http";

function EditDepartmentInfo({ data }: { data: DepartmentInfo }) {
  const router = useRouter();

  const [address, setAddress] = useState(data.address);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [description, setDescription] = useState();

  const saveInfo = async () => {
    await httpClient.updateDepartmentInfo({
      phone,
      email,
      address,
      description
    });

    router.refresh();
  };

  return (
    <Container maxWidth={'md'}>
      <Stack spacing={2}>
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
        {/*<TextField*/}
        {/*  id="description"*/}
        {/*  label="Описание"*/}
        {/*  variant="outlined"*/}
        {/*  multiline*/}
        {/*  sx={{ backgroundColor: "#FFFFFF" }}*/}
        {/*  onChange={(element) => setDescription(element.target.value)}*/}
        {/*  value={description}*/}
        {/*/>*/}

        <Button
          onClick={saveInfo}
          disabled={!description || !phone || !address || !email}
          variant="contained"
        >
          Сохранить
        </Button>
      </Stack>
    </Container>
  );
}

export default function Department({data}: {data: DepartmentInfo}) {

  return (
    <Stack spacing={2}>
      <Typography variant={"h4"}>
        Редактирование информации о кафедре
      </Typography>

      <EditDepartmentInfo data={data}/>
    </Stack>
  )
}
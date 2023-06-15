"use client";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {
  Divider,
  Button,
  Container,
  Link,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DepartmentInfo, DepartmentHeadInfo } from '@/http/responseModels';
import Image from "next/image";
import  Text  from "./components/Text";
import  MiddlePicture  from "./components/MiddlePicture";
import  TextAndPicture  from "./components/TextAndPicture";

interface DepartmentProps {
  data: DepartmentInfo;
  head: DepartmentHeadInfo;
}

export default function Department({data, head}: DepartmentProps) {

  return (
    <Container maxWidth={"lg"}>
      <Stack spacing={1.5}>
        <Typography variant="h5">
          Кафедра математического обеспечения вычислительных систем
        </Typography>
        <Stack>
          <Typography sx={{color: "494949"}}>
            Телефон: {data.phone}
          </Typography>
          <Typography sx={{color: "494949"}}>
            Расположение: {data.address}
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <Typography>
              Электронная почта:{" "}
              <Link href={"/"} underline="none">
                {data.email}
              </Link>
            </Typography>
            
          </Stack>
        </Stack>

        <Box
          sx={{
            maxWidth: "fit-content",
            marginLeft: 0,
          }}
        >
          <Link href={"/teachers"} underline="hover" variant="caption">
            <Stack spacing={1.5} direction={"row"} alignItems={"center"}>
              <Image src="/employees.svg" alt="Сотрудники ссылка" width={30} height={30} />
              <Typography>
                Сотрудники кафедры
              </Typography>
            </Stack>
          </Link>
        </Box>
        
        <Typography variant={"h6"}>
          и. о. заведующего кафедрой
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Image src={head.photo_url} alt="Заведующий кафедры" priority={false} width={150} height={200} />
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Typography sx={{fontSize: 24}}>
                {head.full_name}
              </Typography>
              <Typography sx={{fontSize: 16}}>
                {head.post}
              </Typography>
              <Divider />
            </Stack>

            <Stack spacing={0.5}>
              <Stack direction={"row"} spacing={0.5}>
                <LocationOnIcon color='action' />
                <Typography>
                  {head.address}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={0.5}>
                <PhoneIcon color='action' />
                <Typography>
                  {head.phone}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={0.5}>
                <EmailIcon color='action' />
                <Typography>
                  {head.email}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        
        <Stack>
          <Typography variant="h6">
            О кафедре
          </Typography>
          <Stack>
            
            {/*
              data.map((item) => {
                switch (item.type) {
                  case 1:
                    return (
                      <Text key={item.id} {...item.content} />
                    )
                  case 2:
                    return (
                      <TextAndPicture key={item.id} {...item.content} />
                    )
                  case 3:
                    return (
                      <MiddlePicture key={item.id} {...item.content} />
                    )
                }
              })
            */}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

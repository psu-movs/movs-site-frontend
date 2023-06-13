"use client";

import {
  Button,
  Container,
  Link,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Department() {
  return (
    <Container 
      maxWidth={"md"}
    >
      <Typography variant="h5">
        Кафедра математического обеспечения вычислительных систем
      </Typography>
      <Stack variant={"h6"}>
        <Typography sx={{color: "494949"}}>
          Телефон: (342) 239-67-72
        </Typography>
        <Typography sx={{color: "494949"}}>
          Расположение: ауд. 421 (быв. ауд. 415), корп. 2
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <Typography>
          Электронная почта:
          </Typography>
          <Link href={"/"} underline="none">
            <Typography>
              lab.movs@gmail.com
            </Typography>
          </Link>
        </Stack>
      </Stack>
      <Link href={"/"} underline="none">
        <Stack spacing={1.5} direction={"row"} alignItems={"center"}>
          <Image src="/employees.svg" width={30} height={30} />
          <Typography>
            Сотрудники кафедры
          </Typography>
        </Stack>
      </Link>
      <Typography variant={"h6"}>
        и. о. заведующего кафедрой
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Image src="/gorodilov.svg" width={150} height={200} />
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography sx={{fontSize: 24}}>
              Алексей Юрьевич Городилов
            </Typography>
            <Typography sx={{fontSize: 16}}>
              кандидат технических наук
            </Typography>
            <Image src="/line.svg" width={200} height={2} />
          </Stack>
          <Stack direction={"row"}>
            <Image src="/location.svg" width={24} height={24} />
            <Typography>
              ауд. 240а, корп. 2
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

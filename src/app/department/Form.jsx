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
import  Text  from "./components/Text";
import  MiddlePicture  from "./components/MiddlePicture";
import  TextAndPicture  from "./components/TextAndPicture";

export default function Department() {

  return (
    <Container 
      maxWidth={"lg"}
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
      
      <Stack>
        <Typography variant="h6">
          О кафедре
        </Typography>
        <Stack>
          <Text text={"Кафедра математического обеспечения вычислительных систем создана в начале 1991 г. по приказу ректора ПГУ от 11 января 1991 г."}/>
          <TextAndPicture text={"Новая кафедра выделилась из состава кафедры прикладной математики. Ее основателем и первым заведующим стал доктор физико-математических наук, профессор Александр Иванович Миков. Штатный состав кафедры в то время насчитывал 20 человек. Преподавательский состав кафедры обновляется, но многие преподаватели работают на ней со дня основания."} image={"/director.svg"}/>
          <MiddlePicture image={"/team.svg"} name={"Коллектив кафедры, 1998 г."} description={"Слева направо: Е.Ю.Никитина, А.Шляпников (ныне работает в США), С.И.Чуприна, А.И.Миков (ныне зав. каф. Кубанского госуниверситета, г. Краснодар), Е.Б.Замятина, Л.Н.Лядова, Л.А.Залогова"}/>
        </Stack>
      </Stack>
      
    </Container>
  );
}

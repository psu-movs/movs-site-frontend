"use client";

import { Button, Container, Box, Stack, Typography } from "@mui/material";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


function ProfessionalTest() {
  return (
  <Container maxWidth={"xl"}>
      <Stack justifyContent="space-between" alignItems="left">
        <img src="/earth.svg" alt={"earth"} />
        <Stack
          position={"absolute"}
          justifyContent="space-between"
          sx={{ padding: "7%" }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
            border={1}
            borderColor={"#FFFFFF"}
            width="205px"
            height="35px"
            borderRadius="40px"
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography color={"#ffffff"} fontSize={10} variant={"body1"}>
                ПРОФФЕСИОНАЛЬНЫЙ ТЕСТ
              </Typography>
            </Stack>
          </Box>
          <Box maxWidth={"sm"}>
            <Typography color={"#ffffff"} variant={"body2"} fontSize={44}>
              Добро пожаловать в мир науки
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#fd5600", width: "222px", height: "56px" }}
          >
            Пройти
          </Button>
          <Typography
            variant={"body1"}
            fontSize={16}
            color={"#ffffff"}
            paddingTop={"4%"}
          >
            Пройдите небольшой тест, чтобы узнать подходит ли вам данная
            кафедра.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
function News(){
  return(
    <Container 
    maxWidth={"x1"}>
      <Typography
      paddingLeft={'6%'}
      paddingTop={'1%'}
      fontSize={38} 
      variant={"body2"}>
        Новости
      </Typography>
      <Stack
      paddingLeft={'6%'}
      paddingTop={'1%'}
      width={'1585px'}
      height={'400px'}
      direction={'row'}>
        <img src="/raketa.svg" alt={"raketa"} />
        <Box 
        direction={'column'}
        paddingLeft={'4%'}
        >
          <Typography
          variant={"body1"}
          fontSize={16}>
           1.06.2023
          </Typography>
          <Box maxWidth={"sm"}
          paddingTop={'1%'}> 
            <Typography 
            variant={"body2"}
            fontSize={40}>
             Студенты ИКНТ создали веб-сайт для кафедры МОВС
           </Typography>
          </Box>
          <Typography
          paddingTop={'3%'}
          maxWidth={"xl"}
          fontSize={26}>
          В рамках дисциплины проектной практики, студенты 1 курса из направления «Информационные системы и технологии» создали сайт для кафедры МОВС Механико-математического факультета
          </Typography>
        </Box>

      </Stack>
    </Container>

  )
}


export default function Home() {
  return (
    <main>
      <Header />
      <ProfessionalTest />
      <News/>
      <Footer/>
    </main>
  );
}

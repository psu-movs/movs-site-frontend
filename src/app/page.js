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
function Magazine(){
  return(
    <Container>
      <Container
      direction={'column'}
      alignItems='Left'
      justifyContent={'space-between'}
      >
      <Stack
        direction={'row'}
        spacing={6}
      >
        <Stack
          maxWidth={'520px'}
          height={'597px'}
          paddingTop={'1%'}
          alignItems='Left'
        >
          <img src="/parrot.svg" alt={"parrot"} width={520} height={300}/>
          <Stack
            spacing={2} 
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"center"}
            paddingLeft={'6%'}
            paddingTop={'1%'}
            width={'520px'}
            height={'597px'}>
            <Box 
              direction={'column'}
              paddingLeft={'4%'}
              >
              <Typography
                    variant={"body1"}
                    fontSize={16}>
                      04.09.2023
              </Typography>
              <Box maxWidth={"sm"}
                paddingTop={'1%'}> 
                <Typography 
                  variant={"body2"}
                  fontSize={32}>
                  Один из преподавателей Мех-мата завел себе красноголового попугая  
                </Typography>
                </Box>
                  <Typography
                    sx={{color: "#494949"}} 
                    textAlign={"justify"}
                    paddingTop={'3%'}
                    maxWidth={"xl"}
                    fontSize={24}>
                      Звучит безумно, но это так. Попугай «Кеша» как его назвал сам хозяин говорит, что благодаря нему в вузе...
                  </Typography>
              </Box>

            </Stack>
        </Stack>
        <Stack
          maxWidth={'520px'}
          height={'597px'}
          paddingLeft={'4%'} 
          paddingTop={'1%'}
        >
          <img src="/vesna.svg" alt={"vesna"} width={520} height={300}/>
          <Stack
            spacing={2} 
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"center"}
            paddingLeft={'6%'}
            paddingTop={'1%'}
            width={'520px'}
            height={'597px'}>
            <Box 
              direction={'column'}
              paddingLeft={'4%'}
              >
              <Typography
                    variant={"body1"}
                    fontSize={16}>
                      15.07.2023
              </Typography>
              <Box maxWidth={"sm"}
                paddingTop={'1%'}> 
                <Typography 
                  variant={"body2"}
                  fontSize={32}>
                  Студенты кафедры Высшей математики устроили пикник у первого корпуса 
                </Typography>
                </Box>
                  <Typography
                    sx={{color: "#494949"}} 
                    textAlign={"justify"}
                    paddingTop={'3%'}
                    maxWidth={"xl"}
                    fontSize={24}>
                      Сегодня днем, студенты утсроили пикник напротив первого корпуса. Городилов А.Ю. увидел это и он...
                  </Typography>
              </Box>
</Stack>
        </Stack>
        <Stack
          maxWidth={'520px'}
          height={'597px'}
          paddingLeft={'4%'} 
          paddingTop={'1%'}
        >
          <img src="/proc.svg" alt={"proc"} width={520} height={300}/>
          <Stack
            spacing={2} 
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"center"}
            paddingLeft={'6%'}
            paddingTop={'1%'}
            width={'520px'}
            height={'597px'}>
            <Box 
              direction={'column'}
              paddingLeft={'4%'}
              >
              <Typography
                    variant={"body1"}
                    fontSize={16}>
                      18.05.2023
              </Typography>
              <Box maxWidth={"sm"}
                paddingTop={'1%'}> 
                <Typography 
                  variant={"body2"}
                  fontSize={32}>
                  В первый корпус завезли компьютеры нового поколения
                </Typography>
                </Box>
                  <Typography
                    sx={{color: "#494949"}} 
                    textAlign={"justify"}
                    paddingTop={'3%'}
                    maxWidth={"xl"}
                    fontSize={24}>
                      По приказу Городилова А.Ю. первый корпус получил мощные компьютеры, чтобы наконец-то он смог создать...
                  </Typography>
              </Box>

            </Stack>
        </Stack>
      </Stack>
      </Container>
      <Container
      direction={'column'}
      alignItems='Left'
      justifyContent={'space-between'}
      >
      <Stack
        direction={'row'}
        spacing={6}
      >
        <Stack
          maxWidth={'520px'}
          height={'597px'}
          paddingTop={'1%'}
          alignItems='Left'
        >
          <img src="/parrot.svg" alt={"parrot"} width={520} height={300}/>
          <Stack
            spacing={2} 
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"center"}
            paddingLeft={'6%'}
            paddingTop={'1%'}
            width={'520px'}
            height={'597px'}>
            <Box 
              direction={'column'}
              paddingLeft={'4%'}
              >
              <Typography
                    variant={"body1"}
                    fontSize={16}>
                      04.09.2023
              </Typography>
              <Box maxWidth={"sm"}
                paddingTop={'1%'}> 
                <Typography 
                  variant={"body2"}
                  fontSize={32}>
                  Один из преподавателей Мех-мата завел себе красноголового попугая  
                </Typography>
                </Box>
                  <Typography
                    sx={{color: "#494949"}} 
                    textAlign={"justify"}
                    paddingTop={'3%'}
                    maxWidth={"xl"}
                    fontSize={24}>
                      Звучит безумно, но это так. Попугай «Кеша» как его назвал сам хозяин говорит, что благодаря нему в вузе...
                  </Typography>
              </Box>
</Stack>
        </Stack>
        <Stack
          maxWidth={'520px'}
          height={'597px'}
          paddingLeft={'4%'} 
          paddingTop={'1%'}
        >
          <img src="/vesna.svg" alt={"vesna"} width={520} height={300}/>
          <Stack
            spacing={2} 
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"center"}
            paddingLeft={'6%'}
            paddingTop={'1%'}
            width={'520px'}
            height={'597px'}>
            <Box 
              direction={'column'}
              paddingLeft={'4%'}
              >
              <Typography
                    variant={"body1"}
                    fontSize={16}>
                      15.07.2023
              </Typography>
              <Box maxWidth={"sm"}
                paddingTop={'1%'}> 
                <Typography 
                  variant={"body2"}
                  fontSize={32}>
                  Студенты кафедры Высшей математики устроили пикник у первого корпуса 
                </Typography>
                </Box>
                  <Typography
                    sx={{color: "#494949"}} 
                    textAlign={"justify"}
                    paddingTop={'3%'}
                    maxWidth={"xl"}
                    fontSize={24}>
                      Сегодня днем, студенты утсроили пикник напротив первого корпуса. Городилов А.Ю. увидел это и он...
                  </Typography>
              </Box>

            </Stack>
        </Stack>
        <Stack
          maxWidth={'520px'}
          height={'597px'}
          paddingLeft={'4%'} 
          paddingTop={'1%'}
        >
          <img src="/proc.svg" alt={"proc"} width={520} height={300}/>
          <Stack
            spacing={2} 
            direction={"row"} 
            alignItems={"center"} 
            justifyContent={"center"}
            paddingLeft={'6%'}
            paddingTop={'1%'}
            width={'520px'}
            height={'597px'}>
            <Box 
              direction={'column'}
              paddingLeft={'4%'}
              >
              <Typography
                    variant={"body1"}
                    fontSize={16}>
                      18.05.2023
              </Typography>
              <Box maxWidth={"sm"}
                paddingTop={'1%'}> 
                <Typography 
                  variant={"body2"}
                  fontSize={32}>
                  В первый корпус завезли компьютеры нового поколения
                </Typography>
                </Box>
                  <Typography
                    sx={{color: "#494949"}} 
                    textAlign={"justify"}
                    paddingTop={'3%'}
                    maxWidth={"xl"}
                    fontSize={24}>
                      По приказу Городилова А.Ю. первый корпус получил мощные компьютеры, чтобы наконец-то он смог создать...
                  </Typography>
              </Box>

            </Stack>
        </Stack>
      </Stack>
      </Container>
  </Container>
  )
}


export default function Home() {
  return (
    <main>
      <Header />
      <ProfessionalTest />
      <News/>
      <Magazine/>
      <Footer/>
    </main>
  );
}

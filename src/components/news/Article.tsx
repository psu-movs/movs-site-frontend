import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Article() {
  const match = useMediaQuery("(max-width:1700px)");

  return (
    <Stack
      paddingTop={"1%"}
      alignItems="left"
      width={'85%'}
    >
      <img src="/parrot.svg" alt={"parrot"} loading={'lazy'}/>

      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop={"1%"}
      >
        <Box direction={"column"}>
          <Typography variant={"body1"} fontSize={16}>
            04.09.2023
          </Typography>
          <Box maxWidth={"sm"} paddingTop={"1%"}>
            <Typography variant={"body2"} fontSize={match ? 20 : 32}>
              Один из преподавателей Мех-мата завел себе красноголового
              попугая
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#494949" }}
            textAlign={"justify"}
            paddingTop={"3%"}
            maxWidth={"xl"}
            fontSize={match ? 16 : 24}
          >
            Звучит безумно, но это так. Попугай «Кеша» как его назвал сам
            хозяин говорит, что благодаря нему в вузе...
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}
"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function VocationalTest() {
  const isPhone = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  return (
    <Container maxWidth={"xl"}>
      <Stack justifyContent="space-between" alignItems="left">
        <img src="/earth.svg" alt={"earth"} />

        <Stack
          position={"absolute"}
          justifyContent="space-between"
          sx={{ padding: isPhone ? "3%" : isTablet ? "5%" : "7%" }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.12)",
            }}
            border={1}
            borderColor={"#FFFFFF"}
            width={"205px"}
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
                ПРОФОРИЕНТАЦИОННЫЙ ТЕСТ
              </Typography>
            </Stack>
          </Box>
          <Box maxWidth={"sm"}>
            {!isPhone ? (
              <Typography
                color={"#ffffff"}
                variant={"body2"}
                fontSize={isPhone ? 20 : isTablet ? 30 : 44}
              >
                Добро пожаловать в мир науки
              </Typography>
            ) : (
              <></>
            )}
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fd5600",
              width: isPhone ? "180px" : "220px",
              height: isPhone ? "40px" : "55px",
              marginTop: isTablet ? "3%" : "5%",
            }}
          >
            Пройти
          </Button>
          {!isPhone ? (
            <Typography
              variant={"body1"}
              fontSize={16}
              color={"#ffffff"}
              paddingTop={"4%"}
            >
              Пройдите небольшой тест, чтобы узнать подходит ли вам данная
              кафедра.
            </Typography>
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

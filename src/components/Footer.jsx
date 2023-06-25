"use client";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Footer() {
  const isMobile = useMediaQuery("(max-width:480px)");

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: "#f5f5fe",
        paddingTop: "1%",
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingBottom: "2%",
        marginTop: "2%",
        flex: 1
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          direction={"column"}
          justifyContent="space-between"
          alignItems="left"
          spacing={4}
          sx={{ paddingLeft: "4%" }}
        >
          <Image src="/logo.svg" width={150} height={40} alt={"logo"} />
          <Stack direction={"row"} spacing={3}>
            <Stack direction={"column"}>
              <Typography
                variant="body1"
                color={"rgba(4, 5, 5, 0.8)"}
                fontSize={12}
              >
                Электронная почта
              </Typography>
              <Typography variant="body2">lab.movs@gmail.com</Typography>
            </Stack>
            <Stack direction={"column"}>
              <Typography
                variant="body1"
                color={"rgba(4, 5, 5, 0.8)"}
                fontSize={12}
              >
                Номер телефона
              </Typography>
              <Typography variant="body2">(342) 239-67-72</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

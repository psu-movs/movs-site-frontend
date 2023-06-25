"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function EntryInfo({info}: {info: string}) {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Box
      sx={{
        margin: isPhone
          ? "0% 1% 0% 1%"
          : isTablet
          ? "0% 10% 0% 10%"
          : "0% 20% 0% 20%",

        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        textAlign: "center",
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <Stack mb={isPhone ? "10%" : "5%"}>
        <Typography
          sx={{
            fontSize: isPhone ? 20 : 20,
            color: "#FD5600",
            fontWeight: "600",
          }}
        >
          МОЁ ОБРАЗОВАНИЕ
        </Typography>
        <Typography sx={{ fontSize: isPhone ? 24 : 38, fontWeight: "600" }}>
          Как мне поступить?
        </Typography>
      </Stack>

      <Box
        sx={{
          backgroundColor: "#2148C0",
          color: "#FFFFFF",
          margin: isPhone
            ? "0% 1% 0% 1%"
            : isTablet
              ? "0% 10% 0% 10%"
              : "0% 20% 0% 20%",
          padding: "4%",
          borderRadius: "10px",
          display: 'flex'
        }}
      >
        <Stack sx={{textAlign: 'left'}}>
          <Typography sx={{ fontSize: isPhone ? 24 : 30, fontWeight: "600" }}>
            Прием документов на обучение по программам ПГНИУ
          </Typography>
          <Typography sx={{marginTop: '2%'}}>
            {info}
          </Typography>
        </Stack>
      </Box>


    </Box>
  );
}

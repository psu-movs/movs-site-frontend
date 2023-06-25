"use client";

import "./documents.style.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import Divider from "@mui/material/Divider";
import Link from "next/link";

export default function EntryInfo({info}: {info: string}) {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Box
      sx={{
        margin: isPhone
          ? "2% 5% 0% 5%"
          : isTablet
          ? "2% 10% 0% 10%"
          : "2% 20% 0% 20%",

        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: isPhone ? 24 : 30, fontWeight: "600" }}>
          Необходимые документы:
        </Typography>
        <ReactMarkdown className={"markdown-text"}>{info}</ReactMarkdown>
      </Stack>
      <Stack>
        <Divider
          sx={{ width: "60%", border: "1px solid #2148C0", opacity: "75%" }}
        />
        <Typography sx={{marginTop: '1%'}}>
          Обновлённые правила приёма читайте на{" "}
          <Link
            href={
              "http://www.psu.ru/obrazovanie/vysshee-obrazovanie/postuplenie-983475/bakalavriat-i-spetsialitet/priem-dokumentov"
            }
            style={{textDecoration: 'none', color: '#2148C0'}}
          >
            сайте университета
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}

"use client"

import { Box, Stack, Typography } from "@mui/material";
import { Article } from "@/http/responseModels";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ArticleProps {
  data: Article;
}

export default function Article({data}: ArticleProps) {
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Box
      sx={{display: "flex", justifyContent: "center", marginTop: "1%", maxWidth: '100%', marginBottom: isPhone ? "6%" : "3%"}}
    >
      <Stack spacing={isPhone ? 1 : 3} sx={{maxWidth: isPhone ? "90%" : "60%"}}>
        <Stack spacing={1}>
          <Typography sx={{fontSize: isPhone ? 16 : 32, fontWeight: "600"}}>
            {data.title}
          </Typography>
          <Typography sx={{fontSize: isPhone ? 10 : 18, fontWeight: "medium", color: "#4B4B4B"}}>
            {data.creation_date}
          </Typography>
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <img src={data.thumbnail_url} width={isPhone ? "100%" : "60%"} alt={"Картинка статьи"}  loading={'lazy'}/>
          </Box>
        </Stack>
        <Typography textAlign={"justify"} sx={{fontSize: isPhone ? 14 : 24, fontWeight: "medium", whiteSpace: 'pre-line'}}>
          {data.description}
        </Typography>
      </Stack>
    </Box>
  );
}
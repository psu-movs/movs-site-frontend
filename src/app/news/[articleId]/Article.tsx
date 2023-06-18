"use client"

import { Box, Stack, Typography } from "@mui/material";
import { Article } from "@/http/responseModels";

interface ArticleProps {
  data: Article;
}

export default function Article({data}: ArticleProps) {

  return (
    <Box
      sx={{display: "flex", justifyContent: "center", marginTop: "1%", maxWidth: '100%'}}
    >
      <Stack spacing={4} sx={{maxWidth: "60%"}}>
        <Stack spacing={1}>
          <Typography sx={{fontSize: 40, fontWeight: "medium"}}>
            {data.title}
          </Typography>
          <Typography sx={{fontSize: 20, fontWeight: "medium", color: "#4B4B4B"}}>
            {data.creation_date}
          </Typography>
          <img src={data.thumbnail_url} alt={"Картинка статьи"}  loading={'lazy'}/>
        </Stack>
        <Typography textAlign={"justify"} sx={{fontSize: 24, fontWeight: "medium", whiteSpace: 'pre-line'}}>
          {data.description}
        </Typography>
      </Stack>
    </Box>
  );
}
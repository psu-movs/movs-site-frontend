"use client"

import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ArticleBlock = ({article}) =>  {
  const match = useMediaQuery("(max-width:1700px)");
  
  return (
    <Stack
      paddingTop={"1%"}
      paddingBottom={"3%"}
      alignItems="left"
      width={'90%'}
      sx={{
        '&:hover': {opacity: [0.8]}
      }}
    >
      <img src={article.thumbnail_url} alt={"Картинка статьи"} loading={'lazy'}/>

      <Stack
        spacing={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingTop={"1%"}
      >
        <Box>
          <Typography 
            variant={"body1"} 
            fontSize={match ? 12 : 14}
            color={"#4B4B4B"}>
          {/\d{4}\-\d{2}\-\d{2}/.exec(article.creation_date)}
          </Typography>
          <Box maxWidth={"sm"} paddingTop={"1%"}>
            <Typography 
              color={"#000000"}
              variant={"body2"} 
              fontSize={match ? 16 : 24}>
              {article.title}
            </Typography>
          </Box>
          <Typography
            color={"#494949"}
            textAlign={"justify"}
            paddingTop={"3%"}
            maxWidth={"xl"}
            fontSize={match ? 12 : 16}
          >
            {article.description_preview}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ArticleBlock;
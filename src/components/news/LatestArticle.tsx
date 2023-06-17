import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Article } from "@/http/responseModels";

const ArticleInfo = ({article}: {article: Article}) => {
  const match = useMediaQuery("(max-width:1600px)");

  return (
    <Box direction={"column"} marginLeft={"2%"}>
      <Typography variant={"body1"} fontSize={16}>
        {article.creation_date}
      </Typography>

      <Box maxWidth={"md"} marginTop={"1%"}>
        <Typography variant={match ? 'h5' : "h4"}>
          {article.title}
        </Typography>

        <Typography marginTop={"3%"} fontSize={match ? 20 : 26} color={"#494949"}>
          {article.description_preview.slice(0, 50)}
        </Typography>
      </Box>
    </Box>
  );
}

export default function LatestArticle({article}: {article: Article}) {
  const match = useMediaQuery("(max-width:1700px)");

  return (
    <Stack maxWidth={match ? 'lg' : "xl"} direction={'row'}>
      <Stack maxWidth={match ? 'sm' : "md"}>
        <img
          src={article.thumbnail_url}
          alt={"raketa"}
          loading={"lazy"}
          style={{ width: "auto", height: "100%" }}
        />
      </Stack>
      <ArticleInfo article={article}/>
    </Stack>
  );
}

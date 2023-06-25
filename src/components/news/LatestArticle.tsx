import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Article } from "@/http/responseModels";
import Link from "next/link";

const ArticleInfo = ({ article }: { article: Article }) => {
  const match = useMediaQuery("(max-width:1600px)");

  return (
    <Box marginLeft={"2%"}>
      <Typography variant={"body1"} fontSize={16}>
        {article.creation_date}
      </Typography>

      <Box maxWidth={"md"} marginTop={"1%"}>
        <Typography variant={match ? "h5" : "h4"}>{article.title}</Typography>

        <Typography
          marginTop={"3%"}
          fontSize={match ? 20 : 26}
          color={"#494949"}
        >
          {article.description_preview}
        </Typography>
      </Box>
    </Box>
  );
};

export default function LatestArticle({ article }: { article: Article }) {
  const match = useMediaQuery("(max-width:1700px)");

  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      href={`/news/${article._id}`}
    >
      <Stack
        maxWidth={match ? "lg" : "xl"}
        direction={"row"}
        sx={{ "&:hover": { opacity: 0.8 } }}
      >
        <Stack maxWidth={match ? "sm" : "md"}>
          <img
            src={article.thumbnail_url}
            alt={"raketa"}
            loading={"lazy"}
            style={{ width: "auto", height: "100%" }}
          />
        </Stack>
        <ArticleInfo article={article} />
      </Stack>
    </Link>
  );
}

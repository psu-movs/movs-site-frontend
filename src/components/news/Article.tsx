import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Article } from "@/http/responseModels";
import Link from "next/link";

export default function Article({ article }: { article: Article }) {
  const match = useMediaQuery("(max-width:1700px)");

  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      href={`/news/${article._id}`}
    >
      <Stack
        alignItems="left"
        width={"85%"}
        sx={{
          "&:hover": {
            opacity: 0.9,
          },
        }}
      >
        <img
          src={article.thumbnail_url}
          alt={"article_image"}
          loading={"lazy"}
        />

        <Stack
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={"1%"}
        >
          <Box>
            <Typography variant={"body1"} fontSize={16}>
              {article.creation_date}
            </Typography>
            <Box maxWidth={"sm"} paddingTop={"1%"}>
              <Typography variant={"body2"} fontSize={match ? 20 : 32}>
                {article.title}
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#494949" }}
              textAlign={"justify"}
              paddingTop={"3%"}
              maxWidth={"xl"}
              fontSize={match ? 16 : 24}
            >
              {article.description_preview}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Link>
  );
}

"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LatestArticle from "./LatestArticle";
import Article from "./Article";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import ArticleBlock from "@/app/news/components/ArticleBlock";
import Link from "next/link";

export default function News({ news }) {
  const [gridColumns, setGridColumns] = useState(12);
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isPhone) setGridColumns(4);
    else if (isTablet) setGridColumns(8);
  }, []);

  return (
    <Container maxWidth={"xl"} sx={{ marginTop: "1%" }}>
      <Typography variant={"h4"} sx={{ marginBottom: "1%" }}>
        Новости
      </Typography>

      {!isTablet && <LatestArticle article={news[0]} />}

      <Grid
        container
        spacing={1}
        columns={gridColumns}
        sx={!isTablet ? { marginTop: "2%" } : undefined}
      >
        {news.slice(!isTablet ? 1 : 0).map((article) => (
          <Grid item xs={4} key={article._id}>
            <Link
              href={`/news/${article._id}`}
              style={{ textDecoration: "none" }}
            >
              <ArticleBlock article={article} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

"use client"

import { Box, Grid, Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import ArticleBlock from "./components/ArticleBlock";


export default function NewsList({news}) {
  const [gridColumns, setGridColumns] = useState(12);
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isPhone) setGridColumns(3);
    else if (isTablet) setGridColumns(6);
  }, [])

  return (
    <Box 
      disableGutters
      sx={{ marginLeft: "4%", marginTop: "1%", maxWidth: '100%' }}
    >
      <Grid container spacing={1} columns={gridColumns}>
        {news.map(article => (
          <Grid item xs={3} key={article}>
            <Link href={"/news/" + article._id} underline="none">
              <ArticleBlock key={article} article={article}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

"use client"

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import ArticleBlock from "./components/ArticleBlock";
import Link from "next/link"

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
      sx={{ margin: "4%", maxWidth: '100%' }}
    >
      <Grid container spacing={isPhone ? 2 : 3} columns={gridColumns}>
        {news.map(article => (
          <Grid item xs={3} key={article}>
            <Link href={`/news/${article._id}`} style={{textDecoration: 'none'}}>
              <ArticleBlock key={article} article={article}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

"use client";

import { Box, Grid, Typography } from "@mui/material";
import LatestArticle from "./LatestArticle";
import Article from "./Article";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

export default function News({ news }) {
  const [gridColumns, setGridColumns] = useState(12);
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isPhone) setGridColumns(4);
    else if (isTablet) setGridColumns(8);
  }, []);

  return (
    <Box
      disableGutters
      sx={{ marginLeft: "4%", marginTop: "1%", maxWidth: "100%" }}
    >
      <Typography
        fontSize={isPhone ? 36 : 42}
        fontWeight={"600"}
        fontFamily={"montserrat"}
      >
        Новости
      </Typography>

      {!isTablet && <LatestArticle article={news[0]} />}

      <Grid container spacing={1} columns={gridColumns} sx={!isTablet ? {marginTop: '2%'} : undefined}>
        {news.slice(!isTablet ? 1 : 0).map((article) => (
          <Grid item xs={4} key={article}>
            <Article key={article} article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

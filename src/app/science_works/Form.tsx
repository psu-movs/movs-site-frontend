"use client";

import { Box, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import ScienceWorkBlock from "./components/ScienceWorkBlock";
import { ScienceWork } from "@/http/responseModels";

export interface ScienceWorksProps {
  works: ScienceWork[];
}

const ScienceWorks = ({works}: ScienceWorksProps) => {

  const [gridColumns, setGridColumns] = useState(12);
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isPhone) setGridColumns(3);
    else if (isTablet) setGridColumns(6);
  }, [])

  return (
    <Box 
      sx={{ marginLeft: "4%", marginTop: "1%", maxWidth: '100%' }}
    >
      <Grid container spacing={1} columns={gridColumns}>
        {works.map(work => (
          <Grid item xs={3}>
            <ScienceWorkBlock key={work._id} work={work}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ScienceWorks;
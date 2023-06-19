"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
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
      sx={{ margin: "2%",marginTop: "1%", maxWidth: '100%', display: "flex", flexDirection: "column", alignContent: "center"}}
    >
      <Stack mb={"2%"} sx={{display: "flex", justifyContent: "center",  alignContent: "center", textAlign: "center" }}>
        <Typography sx={{fontSize: isPhone ? 36 : 48, fontWeight: "600"}}>
          Научные работы
        </Typography>
        <Typography color={"#4C4A53"} sx={{fontSize: isPhone ? 16 : 24, fontWeight: "medium"}}>
          Здесь представлены работы наших студентов и преподавателей
        </Typography>
      </Stack>
      <Grid container  spacing={3} columns={gridColumns} >
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
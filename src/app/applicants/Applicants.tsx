"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { Company } from "@/http/responseModels";
import CompanyBlock from "./components/CompanyBlock";

interface ApplicantsProps {
  companies: Company[];
}

export default function Applicants({ companies }: ApplicantsProps) {
  const [gridColumns, setGridColumns] = useState(12);
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");

  useEffect(() => {
    if (isPhone) setGridColumns(6);
    else if (isTablet) setGridColumns(9);
  }, []);

  return (
    <Box
      sx={{
        margin: isPhone
          ? "0% 5% 4% 5%"
          : isTablet
          ? "0% 10% 4% 10%"
          : "0% 20% 4% 20%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Stack mb={isPhone ? "10%" : "5%"}>
        <Typography sx={{ fontSize: isPhone ? 36 : 48, fontWeight: "600" }}>
          Мировой спрос
        </Typography>
        <Typography
          color={"#4C4A53"}
          sx={{ fontSize: isPhone ? 16 : 24, fontWeight: "medium" }}
        >
          Наши выпускники работают не только в городах России, но и по всему
          миру!
        </Typography>
      </Stack>
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: isPhone ? "15%" : "8%",
        }}
        columns={gridColumns}
      >
        {companies.map((company) => (
          <Grid item xs={3}>
            <CompanyBlock key={company._id} company={company} />
          </Grid>
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} >
        <Divider
          sx={{ width: "60%", border: "1px solid #2148C0", opacity: "75%" }}
        />
      </Box>
    </Box>
  );
}

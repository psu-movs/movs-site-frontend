"use client";

import { Box, Stack } from "@mui/material";
import { Company } from "@/http/responseModels";
import useMediaQuery from "@mui/material/useMediaQuery";

interface CompanyProps {
  company: Company;
}

const CompanyBlock = ({ company }: CompanyProps) => {
  const isTablet = useMediaQuery("(max-width:960px)");
  const isPhone = useMediaQuery("(max-width:480px)");
  
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: isPhone ? 50 : 80,
        backgroundColor: "#FFFFFF", 
        borderRadius: 1,
        boxShadow: 3,
        padding: "4% 8% 4% 8%"}}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img width={isPhone ? "90%" : "100%"} src={company.image_url} alt={company.image_url} loading={'lazy'}/>
      </Stack>
    </Stack>
  );
};

export default CompanyBlock;

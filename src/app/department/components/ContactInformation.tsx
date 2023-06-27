"use client";

import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DepartmentInfo } from "@/http/responseModels";

interface ContactInformationProps {
  data: DepartmentInfo;
}

const ContactInformation = ({ data }: ContactInformationProps) => {
  return (
    <Stack>
      <Typography sx={{ color: "494949", fontWeight: "medium" }}>
        Телефон: {data.phone}
      </Typography>
      <Typography sx={{ color: "494949", fontWeight: "medium" }}>
        Расположение: {data.address}
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <Typography sx={{ color: "494949", fontWeight: "medium" }}>
          Электронная почта: {data.email}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ContactInformation;

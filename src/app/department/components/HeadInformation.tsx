"use client";

import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DepartmentHeadInfo } from "@/http/responseModels";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import useMediaQuery from "@mui/material/useMediaQuery";

interface HeadInformationProps {
  data: DepartmentHeadInfo;
}

const HeadInformation = ({ data }: HeadInformationProps) => {
  const isPhone = useMediaQuery("(max-width:480px)");

  return (
    <Stack direction={isPhone ? "column" : "row"} spacing={2}>
      <Image
        src={data.photo_url}
        alt="Заведующий кафедры"
        priority={false}
        width={150}
        height={200}
      />
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography sx={{ fontSize: 24, fontWeight: "medium" }}>
            {data.full_name}
          </Typography>
          <Typography
            sx={{ fontSize: 16, color: "#494949", fontWeight: "medium" }}
          >
            {data.post}
          </Typography>
          <Divider
            sx={{ width: "60%", border: "1px solid #2148C0", opacity: "75%" }}
          />
        </Stack>

        <Stack spacing={0.5}>
          <Stack direction={"row"} spacing={0.5}>
            <LocationOnIcon color="action" />
            <Typography sx={{ color: "#494949", fontWeight: "medium" }}>
              {data.address}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={0.5}>
            <CallIcon color="action" />
            <Typography sx={{ color: "#494949", fontWeight: "medium" }}>
              {data.phone}
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={0.5}>
            <EmailIcon color="action" />
            <Typography sx={{ color: "#494949", fontWeight: "medium" }}>
              {data.email}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeadInformation;

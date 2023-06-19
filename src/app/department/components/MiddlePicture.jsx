"use client";

import {
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function MiddlePicture({image, alt, caption, text}) {
  return (
    <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"center"}>
      <Image src={image} alt={alt} width={250} height={100} />
      <Stack spacing={1}>
        <Typography variant="body2" sx={{fontSize: 20}}>
          {caption}
        </Typography>
        <Typography sx={{color: "#494949", fontSize: 16}} textAlign={"justify"}>
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}

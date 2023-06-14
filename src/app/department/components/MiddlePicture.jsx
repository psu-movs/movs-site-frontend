"use client";

import {
  Button,
  Container,
  Link,
  Box,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function MiddlePicture({image, name, description}) {
  return (
    <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"center"}>
      <Image src={image} width={250} height={100} />
      <Stack spacing={1}>
        <Typography variant="body2" sx={{fontSize: 20}}>
          {name}
        </Typography>
        <Typography sx={{color: "#494949", fontSize: 16}} textAlign={"justify"}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

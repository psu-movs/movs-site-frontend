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

export default function TextAndPicture({text, image, alt}) {
  return (
  <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"center"}>
    <Typography textAlign={"justify"}>
      {text}
    </Typography>
    <Image src={image} alt={alt} width={75} height={100} />
  </Stack>
  );
}
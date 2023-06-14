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

export default function Text({text}) {
  return (
    <Typography textAlign={"justify"}>
      {text}
    </Typography>
  );
}
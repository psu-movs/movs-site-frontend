"use client";

import {
  Typography,
} from "@mui/material";

export default function Text({text}) {
  return (
    <Typography textAlign={"justify"}>
      {text}
    </Typography>
  );
}
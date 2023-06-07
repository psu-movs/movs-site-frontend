"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

import { Inter, MontserratSemiBold } from "@/app/fonts/fonts";

// When needed::: first argument is needed if you have common enterprise theme, and second argument is to override your enterprise theme.
// apply fonts to all other typography options like headings, subtitles, etc...
const defaultTheme = createTheme(
  {
    typography: {
      fontFamily: Inter.style.fontFamily,
      body1: { fontFamily: Inter.style.fontFamily },
      body2: { fontFamily: MontserratSemiBold.style.fontFamily },
      h1: { fontFamily: MontserratSemiBold.style.fontFamily, fontWeight: MontserratSemiBold.style.fontWeight },
      h2: { fontFamily: MontserratSemiBold.style.fontFamily, fontWeight: MontserratSemiBold.style.fontWeight },
      h3: { fontFamily: MontserratSemiBold.style.fontFamily, fontWeight: MontserratSemiBold.style.fontWeight },
      h4: { fontFamily: MontserratSemiBold.style.fontFamily, fontWeight: MontserratSemiBold.style.fontWeight },
      h5: { fontFamily: MontserratSemiBold.style.fontFamily, fontWeight: MontserratSemiBold.style.fontWeight },
      h6: { fontFamily: MontserratSemiBold.style.fontFamily, fontWeight: MontserratSemiBold.style.fontWeight },
    },
    palette: {
      primary: {
        main: "#2148C0",
      },
    },
  },
  {} satisfies ThemeOptions
);

export default defaultTheme;

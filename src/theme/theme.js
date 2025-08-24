// src/theme/theme.js
"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // blue
    },
    secondary: {
      main: "#ff9800", // orange
    },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "Noto Sans , Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "2.2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;

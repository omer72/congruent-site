"use client";

import { createTheme } from "@mui/material/styles";

// Brand tokens — keep in sync with globals.css @theme
const brand = {
  primary: {
    main: "#1e3a8a",
    light: "#5a7dff",
    dark: "#112254",
    contrastText: "#ffffff",
  },
  accent: {
    main: "#f59e0b",
    light: "#fbbf24",
    dark: "#b45309",
    contrastText: "#0b173a",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: brand.primary,
    secondary: brand.accent,
    background: {
      default: "#ffffff",
      paper: "#fafafa",
    },
    text: {
      primary: brand.neutral[900],
      secondary: brand.neutral[600],
    },
    success: { main: "#16a34a" },
    warning: { main: "#f59e0b" },
    error: { main: "#dc2626" },
    divider: brand.neutral[200],
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: { fontWeight: 800, fontSize: "2.5rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.25 },
    h3: { fontWeight: 700, fontSize: "1.5rem", lineHeight: 1.3 },
    h4: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.35 },
    h5: { fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.4 },
    h6: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.5 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
    body2: { fontSize: "0.875rem", lineHeight: 1.5 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "0.5rem 1.5rem",
          fontWeight: 600,
        },
        containedPrimary: {
          "&:hover": { backgroundColor: brand.primary.dark },
        },
        containedSecondary: {
          "&:hover": { backgroundColor: brand.accent.dark },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: `1px solid ${brand.neutral[200]}`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: brand.neutral[900],
          boxShadow: `0 1px 0 ${brand.neutral[200]}`,
        },
      },
    },
  },
});

export default theme;

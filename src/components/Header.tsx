"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BrandButton from "./BrandButton";

export default function Header() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar className="mx-auto w-full max-w-7xl px-4">
        <Typography
          variant="h5"
          component="a"
          href="/"
          sx={{ textDecoration: "none", color: "primary.main", fontWeight: 800 }}
        >
          Congruent
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <nav className="flex items-center gap-4">
          <BrandButton variant="text" color="inherit" href="/">
            Home
          </BrandButton>
          <BrandButton variant="contained" size="small" href="/">
            Contact
          </BrandButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

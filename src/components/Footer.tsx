import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      className="mt-auto border-t border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Congruent. All rights reserved.
        </Typography>
        <nav className="flex gap-4">
          <Typography
            variant="body2"
            component="a"
            href="/"
            sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
          >
            Privacy
          </Typography>
          <Typography
            variant="body2"
            component="a"
            href="/"
            sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
          >
            Terms
          </Typography>
        </nav>
      </div>
    </Box>
  );
}

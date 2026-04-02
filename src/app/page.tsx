import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      component="main"
      className="flex flex-1 flex-col items-center justify-center gap-6 p-8"
    >
      <Typography variant="h2" component="h1" fontWeight={700}>
        Hello, World
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Congruent is live. Next.js + Tailwind + MUI, ready to build.
      </Typography>
      <Button variant="contained" size="large" href="/">
        Get Started
      </Button>
    </Box>
  );
}

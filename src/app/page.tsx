import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Layout, BrandButton, BrandCard } from "@/components";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <Box className="flex flex-col items-center gap-6 py-16 text-center">
        <Typography variant="h1" component="h1">
          Welcome to Congruent
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="text.secondary"
          className="max-w-2xl"
        >
          A modern site built with Next.js, Tailwind CSS, and Material UI —
          designed for clarity and speed.
        </Typography>
        <Box className="flex gap-3">
          <BrandButton size="large" href="/">
            Get Started
          </BrandButton>
          <BrandButton variant="outlined" size="large" href="/">
            Learn More
          </BrandButton>
        </Box>
      </Box>

      {/* Feature cards */}
      <Box className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 py-8">
        <BrandCard>
          <Typography variant="h6" gutterBottom>
            Fast by Default
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Server-side rendering and static generation deliver pages in
            milliseconds.
          </Typography>
        </BrandCard>
        <BrandCard>
          <Typography variant="h6" gutterBottom>
            Design System
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Consistent brand tokens shared between Tailwind and MUI keep the UI
            cohesive.
          </Typography>
        </BrandCard>
        <BrandCard>
          <Typography variant="h6" gutterBottom>
            Production Ready
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Deployed on Netlify with CI/CD, optimized for performance and
            reliability.
          </Typography>
        </BrandCard>
      </Box>
    </Layout>
  );
}

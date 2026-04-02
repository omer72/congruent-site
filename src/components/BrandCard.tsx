"use client";

import MuiCard, { type CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface BrandCardProps extends CardProps {
  children: React.ReactNode;
}

export default function BrandCard({ children, ...props }: BrandCardProps) {
  return (
    <MuiCard {...props}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
}

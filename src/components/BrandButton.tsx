"use client";

import MuiButton, { type ButtonProps } from "@mui/material/Button";

export type BrandButtonProps = ButtonProps;

export default function BrandButton({
  variant = "contained",
  ...props
}: BrandButtonProps) {
  return <MuiButton variant={variant} {...props} />;
}

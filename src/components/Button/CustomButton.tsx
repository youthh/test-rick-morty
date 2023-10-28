import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  text: string;
}

export const CustomButton = ({ text, ...rest }: CustomButtonProps) => {
  return <Button {...rest}>{text}</Button>;
};

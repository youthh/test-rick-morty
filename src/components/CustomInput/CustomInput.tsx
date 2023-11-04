import React from "react";
import { TextFieldProps, TextField } from "@mui/material";
import { FieldInputProps } from "formik";

export type CustomTextFieldProps = {
  field?: FieldInputProps<HTMLInputElement>;
} & TextFieldProps;

export const CustomInput = ({ field, ...rest }: CustomTextFieldProps) => {
  return (
    <>
      <TextField value={field?.value || rest.value} {...rest} {...field} />
    </>
  );
};

import React from "react";
import { TextFieldProps, TextField, FormHelperText } from "@mui/material";
import { FieldInputProps, useFormikContext } from "formik";

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

import React from "react";
import { Field } from "formik";
import { CustomInput } from "../CustomInput";
import { Character, Episodes, Location } from "utils/types";
import { Box } from "@mui/material";

type RenderInputsFIeldsProps = {
  isOpen: boolean;
  filter_parameter_field: Episodes | Location | Character;
  nameParameter: string;
  isOpenOverlay: boolean;
};

const RenderInputsFIelds = ({
  isOpen,
  filter_parameter_field,
  nameParameter,
  isOpenOverlay,
}: RenderInputsFIeldsProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {Object.entries(filter_parameter_field).map(([key, value], index) => {
        if (isOpenOverlay) {
          return (
            <Field
              component={CustomInput}
              key={value}
              placeholder={"Add " + value}
              name={nameParameter + "." + value}
            />
          );
        } else if (!isOpenOverlay && index === 1) {
          return (
            <Field
              component={CustomInput}
              key={value}
              placeholder={"Add key words to find"}
              name={nameParameter + "." + value}
            />
          );
        }
      })}
    </Box>
  );
};

export default RenderInputsFIelds;

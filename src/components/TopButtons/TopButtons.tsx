import React from "react";
import { CustomButton } from "../Button";
import { optionsArray } from "../../utils/data";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export const TopButtons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <CustomButton
        sx={{ marginBottom: "20px" }}
        variant={"contained"}
        text={"FILTER"}
      />
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={optionsArray}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            {option}
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          </li>
        )}
        style={{ width: 213 }}
        renderInput={(params) => (
          <TextField defaultValue={"Selected"} {...params} />
        )}
      />
    </Box>
  );
};
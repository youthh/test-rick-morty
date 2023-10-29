import React from "react";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";
import { optionsArray } from "utils/data";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { CustomButton } from "../Button";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const FilterButtons = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "25px",
          width: "80%",
        }}
      >
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
        <CustomButton
          sx={{ marginBottom: "20px" }}
          variant={"contained"}
          text={"find"}
        />
      </Box>
    </>
  );
};

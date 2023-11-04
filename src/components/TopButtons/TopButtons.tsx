import React, { useState } from "react";
//components
import { Box, Fade } from "@mui/material";
import { FilterButtons, CustomButton } from "../";

export const TopButtons = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2.5 }}>
      <Box sx={{ width: "20%" }}>
        <CustomButton
          onClick={() => setIsOpenFilter(!isOpenFilter)}
          variant={"contained"}
          text={isOpenFilter ? "remove filter" : "filter"}
        />
      </Box>
      {isOpenFilter && (
        <Fade in={isOpenFilter}>
          <Box sx={{ width: "80%" }}>
            <FilterButtons />
          </Box>
        </Fade>
      )}
    </Box>
  );
};

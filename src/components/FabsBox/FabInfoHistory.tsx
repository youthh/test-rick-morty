import React from "react";
import { Fab, Slide } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type FabsInfoHistoryProps = {
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
};

export const FabInfoHistory = ({
  isOpen,
  containerRef,
}: FabsInfoHistoryProps) => {
  return (
    <>
      <Slide
        container={containerRef.current}
        direction="up"
        mountOnEnter
        unmountOnExit
        in={isOpen}
      >
        <Fab sx={{ mb: 2 }} size={"small"}>
          <InfoOutlinedIcon />
        </Fab>
      </Slide>
    </>
  );
};

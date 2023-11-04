import React, { useState } from "react";
import { Fab, Slide } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { History } from "../History";

type FabsInfoHistoryProps = {
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
};

export const FabInfoHistory = ({
  isOpen,
  containerRef,
}: FabsInfoHistoryProps) => {
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  return (
    <>
      <Slide
        container={containerRef.current}
        direction="up"
        mountOnEnter
        unmountOnExit
        in={isOpen}
      >
        <Fab
          onClick={() => setOpenHistoryModal(true)}
          sx={{ mb: 2 }}
          size={"small"}
        >
          <InfoOutlinedIcon />
        </Fab>
      </Slide>
      <History
        open={openHistoryModal}
        handleClose={() => setOpenHistoryModal(false)}
      />
    </>
  );
};

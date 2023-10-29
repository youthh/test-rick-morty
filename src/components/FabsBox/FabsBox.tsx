import React, { useState } from "react";
//components
import { FabInfoHistory, FabDownLoad } from "./";
import { Box, Fab } from "@mui/material";
//icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type FabsBoxProps = {
  isDisabledDownloadBtn?: boolean;
};

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  right: 0,
  bottom: "-5px",
  width: "fit-content",
  transition: ".3s",
};

export const FabsBox = ({ isDisabledDownloadBtn = false }: FabsBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = React.useRef<HTMLElement>(null);

  return (
    <Box ref={containerRef} sx={styles}>
      {isOpen && (
        <>
          <FabInfoHistory isOpen={isOpen} containerRef={containerRef} />
          <FabDownLoad
            isOpen={isOpen}
            containerRef={containerRef}
            isDisabledDownloadBtn={isDisabledDownloadBtn}
          />
        </>
      )}
      <Fab onClick={() => setIsOpen(!isOpen)} size={"large"}>
        {isOpen ? <CloseOutlinedIcon /> : <MoreVertIcon />}
      </Fab>
    </Box>
  );
};

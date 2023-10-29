import React from "react";
import { Fab, Slide } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { arrayToBlob } from "utils/Helpers";
import save from "save-file";
import { useAppSelector } from "utils/Hooks/reduxHooks";
import { characterSelector } from "store/Characters/reducers";

type FubsDownLoadProps = {
  isOpen: boolean;
  containerRef: React.RefObject<HTMLElement>;
  isDisabledDownloadBtn: boolean;
};

export const FabDownLoad = ({
  isOpen,
  containerRef,
  isDisabledDownloadBtn,
}: FubsDownLoadProps) => {
  const { allCharacters } = useAppSelector(characterSelector);

  const handleDownLoadCharacters = async () => {
    const blob = arrayToBlob(allCharacters);
    await save(blob, "character.csv");
  };

  return (
    <>
      <Slide
        container={containerRef.current}
        direction="up"
        mountOnEnter
        unmountOnExit
        timeout={500}
        in={isOpen}
      >
        <Fab
          onClick={handleDownLoadCharacters}
          disabled={isDisabledDownloadBtn}
          sx={{ mb: 3 }}
          size={"small"}
        >
          <FileDownloadOutlinedIcon />
        </Fab>
      </Slide>
    </>
  );
};

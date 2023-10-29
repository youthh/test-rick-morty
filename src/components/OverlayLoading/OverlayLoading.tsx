import React, { ReactNode } from "react";
import { Box, CircularProgress } from "@mui/material";

type OverlayLoadingProps = {
  children: ReactNode;
  isLoading: boolean;
};

export const OverlayLoading = ({
  children,
  isLoading,
}: OverlayLoadingProps) => {
  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

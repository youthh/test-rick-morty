import { createTheme } from "@mui/material";

export const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#F5F5F5",
    },
    secondary: {
      main: "#3C3E44",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          maxWidth: "143px",
          width: "100%",
          padding: "16px",
          fontSize: "11px 16px",
          fontWeight: 400,
          lineHeight: "24px",
          textTransform: "uppercase",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          marginTop: "21px",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          background: "#3C3E44",
          borderRadius: "4px",
          boxShadow:
            " 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)",
          color: "#F5F5F5",
          fontSize: "16px",
          "&.Mui-selected": {
            color: "#202329",
            background: "#F5F5F5",
            boxShadow:
              "0px 5px 14px 0px rgba(0, 0, 0, 0.12), 0px 9px 10px 0px rgba(0, 0, 0, 0.14), 0px 5px 5px 0px rgba(0, 0, 0, 0.20)",
            "&:hover": {
              background: "#a8a8a8",
            },
          },
        },
        previousNext: {
          background: "#F5F5F5",
          color: "#272B33",
          "&:hover": {
            background: "#a8a8a8",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "#F5F5F5",
          color: "#272B33",
          borderRadius: "4px 4px 0 0 !important",
          width: "250px",
          zIndex: "5000",
          padding: "0 12px",
          "&::placeholder": {
            color: "#272B33",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: "1px",
          zIndex: "5000",
          borderRadius: "0 0 4px 4px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "rgba(0, 0, 0, 0.6) !important",
          },
        },
      },
    },
  },
});

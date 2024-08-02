import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";

export const theme = createTheme({
  spacing: (factor: number | string) => `${8 * Number(factor)}px`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography,
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff4081",
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
          margin: 0,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          color: "#000000",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#AAAAAA",
            },
            "&:hover fieldset": {
              borderColor: "#3BAE5B",
              boxShadow: `0 0 4px 0 #3BAE5B`,
            },
            "&.Mui-focused fieldset": {
              borderColor: "#266F3A",
              boxShadow: "unset",
            },
            "&.Mui-error.Mui-focused fieldset": {
              borderColor: "#E95B4A",
              boxShadow: "unset",
            },
            "&.Mui-error:hover fieldset": {
              borderColor: "#E95B4A",
              boxShadow: "0 0 4px 0 #E95B4A",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: 0,
          paddingTop: "4px",
          color: "#AAAAAA",
          fontSize: "0.75rem",
          lineHeight: "1.25rem",
          minHeight: "1.25rem",
          ["&.Mui-error"]: {
            color: "#E95B4A",
          },
        },
      },
    },
  },
});

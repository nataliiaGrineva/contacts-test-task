import { Components } from "@mui/material/styles";
import { Theme } from "@mui/material";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xsmall: true;
    smallBold: true;
    small: true;
    medium: true;
    mediumBold: true;
    large: true;
    largeBold: true;
  }
}
export const muiTypography: Components<Theme>["MuiTypography"] = {
  defaultProps: {
    variant: "medium",
  },
  variants: [
    {
      props: { variant: "xsmall" },
      style: {
        fontSize: "12px",
        lineHeight: "20px",
        fontWeight: 400,
      },
    },
    {
      props: { variant: "smallBold" },
      style: {
        fontSize: '13px',
        lineHeight: '19.5px',
        fontWeight: 500,
      },
    },
    {
      props: { variant: "small" },
      style: {
        fontSize: '13px',
        lineHeight: '19.5px',
        fontWeight: 400,
      },
    },
    {
      props: { variant: "medium" },
      style: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400,
      },
    },
    {
      props: { variant: "mediumBold" },
      style: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
      },
    },
    {
      props: { variant: "large" },
      style: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 400,
      },
    },
    {
      props: { variant: "largeBold" },
      style: {
        fontSize: '20px',
        lineHeight: '30px',
        fontWeight: 500,
      },
    },
  ],
};

declare module "@mui/material/styles" {
  interface TypographyVariants extends ThemeTypographyVariants {}
  interface TypographyVariantsOptions extends ThemeTypographyVariantsOptions {}

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface ThemeOptions {
    spacing?: (factor: number | string) => string;
  }
}

import { Box, IconButton, Stack, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)({
  padding: 0,
  alignSelf: "start",
  "&:hover .MuiSvgIcon-root": {
    color: "red",
  },
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s ease",
  },
});

export const StyledContactContainer = styled(Box)({
  backgroundColor: "#EDEDED",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#D4D4D4",
  },
});

export const ResponsiveStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(4.75),
  flex: 1,
  overflow: "hidden",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ListContainer = styled(Box)({
  overflow: "scroll",
  flex: 1,
  minWidth: "328px",
  maxWidth: "558px",
  position: "relative",
});

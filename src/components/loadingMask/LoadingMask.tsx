import { Box, CircularProgress } from "@mui/material";

export const LoadingMask = () => (
  <Box
    position="absolute"
    top={0}
    left={0}
    width="100%"
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgcolor="rgba(255, 255, 255, 0.8)"
    zIndex={1}
  >
    <CircularProgress />
  </Box>
);

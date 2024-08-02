import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const RouterContainer = styled(Box)(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    padding: '22px',
    maxWidth: "1280px",
    minWidth: "400px",
}));
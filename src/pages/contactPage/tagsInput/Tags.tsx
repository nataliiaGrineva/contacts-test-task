import { Box, Stack, Typography } from "@mui/material";
import { Cancel } from "@mui/icons-material";

interface IProps {
  data: string;
  handleDelete: (value: string) => void;
}

export const Tags = ({ data, handleDelete }: IProps) => {
  return (
    <Box
      sx={{
        background: "#A6A6A6",
        borderRadius: 1,
        height: "100%",
        display: "flex",
        padding: "0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography variant="small">{data}</Typography>
        <Cancel
          fontSize="small"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

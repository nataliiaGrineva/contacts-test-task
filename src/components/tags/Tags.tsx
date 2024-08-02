import { Box, Stack, Typography } from "@mui/material";
import { ITag } from "../../interfaces";
interface IProps {
    tags: ITag[]
}

export const Tags = ({tags}: IProps) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {tags.map((tag, index) => (
        <Box key={`${tag.id}_${index}`} sx={{backgroundColor: '#A6A6A6'}} borderRadius={1} px={1.5}>
            <Typography variant="smallBold">{tag.tag}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

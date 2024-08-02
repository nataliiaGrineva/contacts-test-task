import {
  Box,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Tags } from "./Tags";
import { useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAddTagsMutation } from "../../../store/api";
import { StyledButton } from "./styled";
import { useParams } from "react-router-dom";

export const TagsInput = () => {
  const { contactId = "" } = useParams<{ contactId: string }>();
  const [addTags, { isLoading }] = useAddTagsMutation();
  const [tags, setTags] = useState<string[]>([]);
  const tagRef = useRef<HTMLInputElement | null>(null);

  const handleDelete = (value: string) => {
    const newTags = tags.filter((val) => val !== value);
    setTags(newTags);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tagRef.current?.value) {
      const uniqueTags = [...new Set([...tags, tagRef.current.value])];
      setTags(uniqueTags);
    }

    if (tagRef.current) {
      tagRef.current.value = "";
    }
  };

  const handleAddTags = async () => {
    const newTags = [...tags];

    if (tagRef.current?.value) {
      newTags.push(tagRef.current.value);
    }
    await addTags({ id: contactId, tags: newTags });
    setTags([]);
    if (tagRef.current) {
      tagRef.current.value = "";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <form onSubmit={handleOnSubmit} data-testid="tags-form">
        <Stack
          margin="0 0.2rem 0 0"
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={1}
        >
          {tags.map((data) => {
            return (
              <Tags
                data={data}
                handleDelete={handleDelete}
                key={nanoid()}
                data-testid={`tag-${data}`}
              />
            );
          })}
        </Stack>
        <TextField
          inputRef={tagRef}
          size="small"
          sx={{ margin: "1rem 0" }}
          placeholder="Enter tags"
          data-testid="tag-input"
        />
        <StyledButton
          onClick={handleAddTags}
          variant="outlined"
          color="inherit"
          data-testid="add-tags-button"
        >
          <Typography variant="mediumBold" color="#000000">
            {isLoading ? (
              <CircularProgress size={16} data-testid="loading-spinner" />
            ) : (
              "Add Tags"
            )}
          </Typography>
        </StyledButton>
      </form>
    </Box>
  );
};

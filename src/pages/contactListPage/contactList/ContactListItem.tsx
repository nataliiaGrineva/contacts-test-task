import { Box, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledContactContainer, StyledIconButton } from "./styled";
import { ContactInfo, Tags } from "../../../components";
import { IContact } from "../../../interfaces";
import { useCallback } from "react";

interface IProps {
  contact: IContact;
  onDelete: (id: string) => void;
  onClick: (id: string) => void;
}
export const ContactListItem = ({ contact, onDelete, onClick }: IProps) => {
  const handleDelete = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onDelete(contact.id);
  }, [contact.id, onDelete]);

  const handleClick = useCallback(() => {
    onClick(contact.id);
  }, [contact.id, onClick]);

  return (
    <StyledContactContainer p={2} borderRadius={1} onClick={handleClick}>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <ContactInfo contact={contact} />
          <StyledIconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </StyledIconButton>
        </Stack>
        <Box pl={9}>
          <Tags tags={contact.tags} />
        </Box>
      </Stack>
    </StyledContactContainer>
  );
};

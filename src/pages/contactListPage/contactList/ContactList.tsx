import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../../store/api";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ContactListItem } from "./ContactListItem";
import { LoadingMask } from "../../../components";
import { ListContainer } from "./styled";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CONTACT_ROUTE } from "../../../routes/routes";

export const ContactList = () => {
  const navigate = useNavigate();

  const { data, isFetching } = useGetContactsQuery("desc");
  const { resources: contacts = [] } = data || {};

  const [deleteContact] = useDeleteContactMutation();
  const handleDelete = useCallback(
    (id: string) => {
      deleteContact(id);
    },
    [deleteContact]
  );

  const handleClick = useCallback(
    (id: string) => {
      const route = CONTACT_ROUTE.replace(":contactId", id);
      navigate(route);
    },
    [navigate]
  );

  return (
    <ListContainer>
      {isFetching && <LoadingMask />}
      <Stack spacing={2} px={1}>
        <Typography variant="largeBold" alignSelf="baseline">
          Contacts
        </Typography>
        {contacts.map((contact) => (
          <ContactListItem
            contact={contact}
            onDelete={handleDelete}
            onClick={handleClick}
            key={contact.id}
          />
        ))}
      </Stack>
    </ListContainer>
  );
};

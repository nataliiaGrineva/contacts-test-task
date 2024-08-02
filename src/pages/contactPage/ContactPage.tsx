import { useNavigate, useParams } from "react-router-dom";
import { useGetContactByIdQuery } from "../../store/api";
import { ContactInfo, LoadingMask, Tags } from "../../components";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { CONTACTS_LIST_ROUTE } from "../../routes/routes";
import { TagsInput } from "./tagsInput/TagsInput";
import { Container } from "./styled";

export const ContactPage = () => {
  const { contactId = "" } = useParams<{ contactId: string }>();
  const { data, isFetching } = useGetContactByIdQuery(contactId);
  const navigate = useNavigate();

  const { resources: contacts = [] } = data || {};
  const [contact] = contacts;

  const isContactDeleted = !contact;

  useEffect(() => {
    if (isContactDeleted && !isFetching) {
      navigate(CONTACTS_LIST_ROUTE);
    }
  }, [isContactDeleted, isFetching, navigate]);

  if (isFetching && isContactDeleted) {
    return <LoadingMask />;
  }

  if (isContactDeleted && !isFetching) {
    return null;
  }

  return (
    <Container p={4}>
      {isFetching && <LoadingMask />}
      <Stack direction="column" gap={2}>
        <ContactInfo contact={contact} />
        <Tags tags={contact.tags}/>
        <TagsInput/>
      </Stack>
    </Container>
  );
};

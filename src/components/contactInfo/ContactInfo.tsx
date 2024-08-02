import { Stack, Typography } from "@mui/material";
import { ContactAvatar } from "../contactAvatar";
import { IContact } from "../../interfaces";

interface IProps {
  contact: IContact;
}

export const ContactInfo = ({ contact }: IProps) => {
  const {
    avatar_url,
    fields: {
      email: emailField,
      ["first name"]: firstNameField,
      ["last name"]: lastNameField,
    },
  } = contact;

  const [{value: email = ''}] = emailField || [{}];
  const [{value: firstName = ''}] = firstNameField || [{}];
  const [{value: lastName = ''}] = lastNameField || [{}];

  const contactName = `${firstName} ${lastName}`.trim();

  return (
    <Stack direction="row" spacing={1.5}>
      <ContactAvatar size={60} imageUrl={avatar_url} />
      <Stack direction="column" alignItems="start" alignSelf='center'>
        <Typography variant="mediumBold">{contactName}</Typography>
        <Typography variant="mediumBold">{email}</Typography>
      </Stack>
    </Stack>
  );
};

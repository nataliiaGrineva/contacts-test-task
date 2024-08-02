import { ContactList } from "./contactList";
import { ResponsiveStack } from "./contactList/styled";
import { CreateContact } from "./createContact";

export const ContactListPage = () => {
  return (
    <ResponsiveStack>
      <CreateContact />
      <ContactList />
    </ResponsiveStack>
  );
};

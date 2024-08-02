import { Navigate, RouteObject } from "react-router-dom";
import { ContactListPage } from "../pages/contactListPage";
import { ContactPage } from "../pages/contactPage";

export const HOME_ROUTE = "/";
export const CONTACTS_LIST_ROUTE: string = "/contacts";
export const CONTACT_ROUTE: string = "/contacts/:contactId";

export const routes: RouteObject[] = [
  { path: HOME_ROUTE, element: <Navigate to={CONTACTS_LIST_ROUTE} replace /> },
  { path: CONTACTS_LIST_ROUTE, element: <ContactListPage /> },
  { path: CONTACT_ROUTE, element: <ContactPage /> },
];

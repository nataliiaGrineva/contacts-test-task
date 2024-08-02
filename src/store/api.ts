import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IContactsResponse, ICreateContactPayload } from "../interfaces";
import { BASE_URL, TOKEN } from "./constants";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  }),
  tagTypes: ["Contacts", "Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query<IContactsResponse, string>({
      query: (sort) => ({
        url: `/contacts`,
        params: { sort: `created:${sort}` },
      }),
      providesTags: ["Contacts"],
    }),
    getContactById: builder.query<IContactsResponse, string>({
      query: (id) => ({
        url: `/contact/${id}`,
      }),
      providesTags: ["Contact"],
    }),
    createContact: builder.mutation<void, ICreateContactPayload>({
      query: (contact) => ({
        url: `/contact`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation<void, string>({
      query(id) {
        return {
          url: `/contact/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),

    addTags: builder.mutation<void, { id: string; tags: string[] }>({
      query: ({ id, tags }) => ({
        url: `/contact/${id}/tags`,
        method: "PUT",
        body: { tags },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useAddTagsMutation,
} = contactsApi;

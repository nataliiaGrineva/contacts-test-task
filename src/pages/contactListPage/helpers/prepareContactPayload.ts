export const prepareContactPayload = (formData: { firstName: string; lastName: string; email: string }) => {

    return {
        record_type: "person",
        privacy: {
          edit: null,
          read: null,
        },
        owner_id: null,
        fields: {
          "first name": [
            { value: formData.firstName.trim() || "John", modifier: "", label: "first name" },
          ],
          "last name": [{ value: formData.lastName.trim() || "Doe", modifier: "", label: "last name" }],
          email: [{ value: formData.email.trim().toLowerCase(), modifier: "", label: "email" }],
        },
      }
  };
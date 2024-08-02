import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string().ensure().when("lastName", {
    is: '',
    then: () => yup.string().required(),
  }),
  lastName: yup.string().ensure().when("firstName", {
  is: '',
    then: () => yup.string().required('At least one of first name or last name must be provided'),
  }),
  email: yup
  .string()
  .email("Invalid email address")
  .required("Email is required"),
}, [['lastName', 'firstName']]);


export type TAddContactSchema = yup.InferType<typeof validationSchema>;

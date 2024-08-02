import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  Stack,
  CircularProgress,
} from "@mui/material";
import { TAddContactSchema, validationSchema } from "./validationSchema";
import { Controller, useForm } from "react-hook-form";
import { useCreateContactMutation } from "../../../store/api";
import { prepareContactPayload } from "../helpers";

export const CreateContact = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: TAddContactSchema) => {
    const normalizedPayload = prepareContactPayload(data);

    await createContact(normalizedPayload);
    reset();
  };

  const handleFieldChange = async (field: "firstName" | "lastName") => {
    await trigger(field);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} width="280px">
      <Stack>
        <Typography variant="largeBold" alignSelf="baseline">
          Create Contact
        </Typography>
        <FormControl fullWidth margin="normal">
          <FormLabel htmlFor="firstName" sx={{ alignSelf: "flex-start" }}>
            <Typography variant="mediumBold">First Name</Typography>
          </FormLabel>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleFieldChange("lastName");
                }}
                variant="outlined"
                fullWidth
                margin="normal"
                error={Boolean(errors.firstName)}
                helperText=" "
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormLabel htmlFor="lastName" sx={{ alignSelf: "flex-start" }}>
            <Typography variant="mediumBold">Last Name</Typography>
          </FormLabel>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleFieldChange("firstName");
                }}
                variant="outlined"
                fullWidth
                margin="normal"
                error={Boolean(errors.lastName)}
                helperText={errors.lastName ? errors.lastName.message : " "}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <FormLabel htmlFor="email" sx={{ alignSelf: "flex-start" }}>
            <Typography variant="mediumBold">Email</Typography>
          </FormLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                {...field}
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={Boolean(errors.email)}
                helperText={errors.email ? errors.email.message : " "}
              />
            )}
          />
        </FormControl>
        <Box textAlign="center" mt={2} sx={{ color: "#AAAAAA" }}>
          <Button
            variant="outlined"
            color="inherit"
            type="submit"
            sx={{ width: "100%", textTransform: "none" }}
          >
            <Typography variant="mediumBold" color="#000000">
              {isLoading ? <CircularProgress size={16} /> : "Add Contact"}
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

import * as Yup from "yup";

export const createAccountSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one letter, one number and one special character"
    )
    .required("Password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const BusinessContactInfoSchema = Yup.object().shape({
  businessName: Yup.string().required("Business Name is required"),
  contactName: Yup.string().required("Contact Name is required"),
  employerId: Yup.string().required("Employee ID is required"),
  title: Yup.string().required("Title is required"),
  websiteUrl: Yup.string().required("Website URL is required"),
  businessStreetAddress: Yup.string().required(
    "Business Street Address is required"
  ),
  aptSteBldg: Yup.string(),
  zipCode: Yup.string().required("Zip Code is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  mobile: Yup.string().required("Mobile is required"),
});

export const bankingSchema = Yup.object().shape({
  bankingAccount: Yup.string().required("Banking account is required"),
  routingNumber: Yup.string().required("Routing is required"),
  einNumber: Yup.string().required("EIN is required"),
});

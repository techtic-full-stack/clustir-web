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
  businessName: Yup.string()
    .required("Business Name is required")
    .test('no-spaces', 'Business Name should not contain only spaces', (value) => !/^\s+$/.test(value)),
  contactName: Yup.string()
    .required("Contact Name is required")
    .test('no-spaces', 'Contact Name should not contain only spaces', (value) => !/^\s+$/.test(value)),
  employerId: Yup.string()
    .required("Employee ID is required")
    .test('no-spaces', 'Employee ID should not contain only spaces', (value) => !/^\s+$/.test(value)),
  title: Yup.string()
    .required("Title is required")
    .test('no-spaces', 'Title should not contain only spaces', (value) => !/^\s+$/.test(value)),
  websiteUrl: Yup.string()
    .required("Website URL is required")
    .test('no-spaces', 'Website URL should not contain only spaces', (value) => !/^\s+$/.test(value)),
  businessStreetAddress: Yup.string()
    .required("Business Street Address is required")
    .test('no-spaces', 'Business Street Address should not contain only spaces', (value) => !/^\s+$/.test(value)),
  zipCode: Yup.string()
    .required("Zip Code is required")
    .test('no-spaces', 'Zip Code should not contain only spaces', (value) => !/^\s+$/.test(value)),
  city: Yup.string()
    .required("City is required")
    .test('no-spaces', 'City should not contain only spaces', (value) => !/^\s+$/.test(value)),
  state: Yup.string()
    .required("State is required")
    .test('no-spaces', 'State should not contain only spaces', (value) => !/^\s+$/.test(value)),
  mobile: Yup.string()
    .required("Mobile is required")
    .test('no-spaces', 'Mobile should not contain only spaces', (value) => !/^\s+$/.test(value)),
});

export const bankingSchema = Yup.object().shape({
  bankingAccount: Yup.string()
    .required("Banking account is required")
    .test('no-spaces', 'Banking Account should not contain only spaces', (value) => !/^\s+$/.test(value)),
  routingNumber: Yup.string()
    .required("Routing is required")
    .test('no-spaces', 'Routing Number should not contain only spaces', (value) => !/^\s+$/.test(value)),
  einNumber: Yup.string()
    .required("EIN is required")
    .test('no-spaces', 'EIN Number should not contain only spaces', (value) => !/^\s+$/.test(value)),
});

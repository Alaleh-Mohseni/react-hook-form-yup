import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required('Password is required')
    .min(5, "Minimum 5 characters required")
    .matches(passwordRules, "Please create a stronger password"),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref("password"), null], "Password must match"),
  terms: yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});


export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email not valid')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
})
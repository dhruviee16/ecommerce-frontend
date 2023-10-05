import { object, ref, string } from 'yup';

export const loginFields = {
  email: string().email().ensure().required('Email is required'),
  password: string().trim().ensure().required('Password is required'),
};

export const LoginSchema = object().shape(loginFields).required();

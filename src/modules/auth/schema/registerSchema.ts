import { object, ref, string } from 'yup';
import { loginFields } from './loginSchema';

export const registerFields = {
  ...loginFields,
  id: string().trim(),
  name: string().trim().ensure().required('Name is required'),
  confirmPassword: string()
    .required('Required')
    .equals([ref('password')], 'Passwords must match'),
};

export const RegisterSchema = object().shape(registerFields).required();

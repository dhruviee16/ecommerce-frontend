import { registerFields } from './registerSchema';
import { object, ref, string } from 'yup';
import { loginFields } from './loginSchema';

const traderRegisterFields = {
  ...registerFields,
  companyName: string().trim().ensure().required('Company Name is required'),
  companyContactNumber: string()
    .trim()
    .ensure()
    .required('Company Contact Number is required'),
  Address1: string().trim().ensure().required('Address 1 is required'),
  Address2: string().trim().ensure().required('Address 2 is required'),
  serviceCategory: string().required('Service Category is required'),
  shopOpen: string().required('Shop Open is required'),
  shopOpenAMPM: string().required('Shop Open AM/PM is required'),
  shopClose: string().required('Shop Close is required'),
  shopCloseAMPM: string().required('Shop Close AM/PM is required'),
  description: string(),
};

export const RegisterSchema = object().shape(traderRegisterFields).required();

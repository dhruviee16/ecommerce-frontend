import { object, string } from 'yup';
import { registerFields } from './registerSchema';

const traderRegisterFields = {
  ...registerFields,
  companyName: string().trim().ensure().required('Company Name is required'),
  contactNumber: string()
    .trim()
    .ensure()
    .required('Company Contact Number is required'),
  address: string().trim().ensure().required('Address 1 is required'),
  description: string(),
};

export const TraderRegisterSchema = object()
  .shape(traderRegisterFields)
  .required();

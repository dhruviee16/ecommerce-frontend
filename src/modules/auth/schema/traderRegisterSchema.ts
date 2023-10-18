import { object, string } from 'yup';
import { registerFields } from './registerSchema';

const traderRegisterFields = {
  ...registerFields,
  companyName: string().trim().ensure().required('Company Name is required'),
  shopAddress: string().trim().ensure().required('Shop Address is required'),
  shopContactNumber: string()
    .trim()
    .ensure()
    .required('Shop Contact Number is required'),
  description: string(),
};

export const TraderRegisterSchema = object()
  .shape(traderRegisterFields)
  .required();

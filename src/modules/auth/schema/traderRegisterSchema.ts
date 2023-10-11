import { object, string } from 'yup';
import { registerFields } from './registerSchema';

const traderRegisterFields = {
  ...registerFields,
  companyName: string().trim().ensure().required('Company Name is required'),
  description: string(),
};

export const TraderRegisterSchema = object()
  .shape(traderRegisterFields)
  .required();

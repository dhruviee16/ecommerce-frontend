import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.number().required(),
  quantity: Yup.number().required(),
  companyId: Yup.string().required(),
  categoryId: Yup.string().required(),
  imgUrl: Yup.string(),
});

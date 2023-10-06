'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Card, Typography } from '@material-tailwind/react';
import { Form } from 'formik';
import * as Yup from 'yup';

const initalValues = {
  category: '',
  name: '',
  price: '',
  qty: '',
  desc: '',
};

const SigninSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  category: Yup.string().required('Required'),
  desc1: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
});
const handleSubmit = async (values: any) => {
  console.log(values);
};

const AddProduct = () => {
  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="blue-gray">
          Add-Product
        </Typography>
        <FormLayout
          initialValues={initalValues}
          validationSchema={SigninSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="mt-4 mb-2 w-full ">
              <div className=" flex flex-col gap-4">
                <FormFieldLayout label="Product category" name="category" />
                <FormFieldLayout label="Product name" name="name" />
                <FormFieldLayout label="Price" name="price" />
                <FormFieldLayout label="Qty" name="qty" />
                <FormFieldLayout label="Price" name="price" />
                <AlertDialogFooter>
                  <AlertDialogCancel className="w-full">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="w-full">Add</AlertDialogAction>
                </AlertDialogFooter>
              </div>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default AddProduct;

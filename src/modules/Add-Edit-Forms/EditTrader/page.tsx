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
  ShopName: '',
  Contact: '',
  Address: '',
};

const SigninSchema = Yup.object().shape({
  ShopName: Yup.string().required('Required'),
  Contact: Yup.string().required('Required'),
  Address: Yup.string().required('Required'),
});
const handleSubmit = async (values: any) => {
  console.log(values);
};

const EditProfile = () => {
  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="black">
          Edit Details
        </Typography>
        <FormLayout
          initialValues={initalValues}
          validationSchema={SigninSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="mt-4 mb-2 w-full ">
              <div className=" flex flex-col gap-4">
                <FormFieldLayout label="Shop Name" name="ShopName" isDisabled />
                <FormFieldLayout label="Contact" name="Contact" />
                <FormFieldLayout label="Address" name="Address" />
                <AlertDialogFooter>
                  <AlertDialogAction className="w-full bg-black text-white ">
                    Update
                  </AlertDialogAction>
                  <AlertDialogCancel className="w-full">
                    Cancel
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </div>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default EditProfile;

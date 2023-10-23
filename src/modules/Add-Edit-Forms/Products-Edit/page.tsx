'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form } from 'formik';
import { useProductForm } from '../hooks/useProductForm';

const EditProducts = ({ id }: { id: string }) => {
  const { handleSubmit, initialValues, validationSchema, loading } =
    useProductForm(id);

  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="blue-gray">
          Edit Product
        </Typography>
        <FormLayout
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ isValid }: any) => (
            <Form className="mt-4 mb-2 w-full ">
              <div className=" flex flex-col gap-4">
                <FormFieldLayout label="Product Name " name="name" />
                <FormFieldLayout label="QTY " name="quantity" />
                <FormFieldLayout label="Price" name="price" />
                <FormFieldLayout label="Description" name="description" />
                <AlertDialogFooter>
                  <AlertDialogCancel className="w-full">
                    Cancel
                  </AlertDialogCancel>
                  {/* <AlertDialogAction className="w-full bg-black text-white "> */}
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={loading || !isValid}
                  >
                    Update
                  </Button>
                  {/* </AlertDialogAction> */}
                </AlertDialogFooter>
              </div>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default EditProducts;

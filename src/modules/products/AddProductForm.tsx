'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import {
  Button,
  Card,
  Option,
  Select,
  Typography,
} from '@material-tailwind/react';
import { Field, FieldProps, Form } from 'formik';
import { useCategories } from './hooks/useCategories';
import { useProductForm } from './hooks/useProductForm';

const AddProductForm = () => {
  const { categories } = useCategories();

  const { initialValues, handleSubmit, validationSchema, loading } =
    useProductForm();

  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="blue-gray">
          Add Product
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
                <Field name="categoryId">
                  {({ field, form }: FieldProps) => (
                    <Select
                      {...field}
                      label="Select Category"
                      variant="outlined"
                      name="categoryId"
                      onChange={(e: any) => form.setFieldValue(field.name, e)}
                    >
                      {categories.map(({ id, name }) => (
                        <Option value={id} key={id}>
                          {name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Field>
                <FormFieldLayout label="Product name" name="name" />
                <FormFieldLayout label="Price" name="price" />
                <FormFieldLayout label="Quantity" name="quantity" />
                <FormFieldLayout label="Description" name="description" />
                <AlertDialogFooter>
                  <AlertDialogCancel className="w-full">
                    Cancel
                  </AlertDialogCancel>
                  {/* <AlertDialogAction className="w-full bg-transparent"> */}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading || !isValid}
                  >
                    Add
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

export default AddProductForm;

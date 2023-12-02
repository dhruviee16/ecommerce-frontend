import { FormLayout } from '@/components/forms';
import {
  AlertDialogAction,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Button, Option, Select } from '@material-tailwind/react';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { Field, FieldProps, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useUpdateOrder } from './hooks/useUpdateOrder';

type Props = {
  status: string;
  id: string;
};

const ORDER_STATUS = ['PENDING', 'ACCEPTED', 'REJECTED'];

const validationSchema = Yup.object({
  status: Yup.string().required('Required'),
});

const UpdateOrderStatusForm: React.FC<Props> = ({ id }) => {
  const { handleSubmit, loading, error, initialValues } = useUpdateOrder(id);

  return (
    <FormLayout
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isValid }: any) => (
        <Form className="mt-4 mb-2 w-full ">
          <div className=" flex flex-col gap-4">
            <Field name="status">
              {({ field, form }: FieldProps) => (
                <Select
                  {...field}
                  label="Select status"
                  variant="outlined"
                  name="status"
                  onChange={(e: any) => form.setFieldValue(field.name, e)}
                >
                  {ORDER_STATUS.map((status, index) => (
                    <Option value={status} key={index}>
                      {status}
                    </Option>
                  ))}
                </Select>
              )}
            </Field>
            <AlertDialogFooter>
              <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
              <AlertDialogAction className="w-full bg-transparent">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading || !isValid}
                >
                  Update
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </div>
        </Form>
      )}
    </FormLayout>
  );
};

export default UpdateOrderStatusForm;

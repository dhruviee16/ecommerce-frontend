'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import {
  AlertDialogCancel,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { useUpdateCompany } from '@/modules/profile/trader/hooks/useUpdateCompany';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form } from 'formik';

const EditProfile = ({ id }: { id: string }) => {
  const { handleSubmit, loading, initialValues, validationSchema } =
    useUpdateCompany(id);

  return (
    <div className="-m-[15%]">
      <Card color="transparent" shadow={false} className="m-20">
        <Typography variant="h4" color="black">
          Edit Details
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
                <FormFieldLayout
                  label="Shop Name"
                  name="companyName"
                  isDisabled
                />
                <FormFieldLayout label="Contact" name="contactNumber" />
                <FormFieldLayout label="Address" name="address" />
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

export default EditProfile;

'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form } from 'formik';
import Link from 'next/link';
import { useSignup } from './hooks';

const SignUpForm = () => {
  const { initialValues, loading, handleSubmit, RegisterSchema } = useSignup();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card color="transparent" shadow={false} className="m-6">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter details to create an account
        </Typography>
        <FormLayout
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          enableReinitialize
        >
          {() => (
            <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-4">
                <FormFieldLayout label="Name" name="name" />
                <FormFieldLayout label="Email" name="email" />
                <FormFieldLayout label="Address" name="address" />
                <FormFieldLayout label="Contact Number" name="contactNumber" />
                <FormFieldLayout
                  type="password"
                  label="Password"
                  name="password"
                />
                <FormFieldLayout
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                />
              </div>
              <Button
                className="mt-6"
                fullWidth
                type="submit"
                disabled={loading}
              >
                Sign up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{' '}
                <Link
                  href="/auth/SignIn"
                  className="font-medium text-indigo-500 transition-colors hover:text-indigo-700 underline"
                >
                  Sign In
                </Link>
              </Typography>
            </Form>
          )}
        </FormLayout>
      </Card>
    </div>
  );
};

export default SignUpForm;

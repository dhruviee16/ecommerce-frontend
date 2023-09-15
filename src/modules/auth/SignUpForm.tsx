'use client';

import { FormFieldLayout, FormLayout } from '@/components/forms';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

const initalValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .equals([Yup.ref('password')], 'Passwords must match'),
});

const handleSubmit = async (values: any) => {
  console.log(values);
};

const SignUpForm = () => {
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
          initialValues={initalValues}
          validationSchema={SignupSchema}
          enableReinitialize
        >
          {() => (
            <Form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-4">
                <FormFieldLayout label="Name" name="name" />
                <FormFieldLayout label="Email" name="email" />
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
                color="indigo"
                disabled={false}
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

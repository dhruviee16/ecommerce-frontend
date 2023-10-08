'use client';

import { FormFieldLayout } from '@/components/forms';
import { Button, Card, Typography } from '@material-tailwind/react';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useTraderSignUp } from './hooks/useTraderSignUp';

interface IWizardProps {
  children: React.ReactNode;
  initialValues: any;
  onSubmit: (_values: any, bag: any) => void;
}

interface IWizardStepProps {
  children: React.ReactNode;
  onSubmit: (values: any, bag: any) => void;
  validationSchema: any;
}

const sleep = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const Wizard: React.FC<IWizardProps> = ({
  children,
  initialValues,
  onSubmit,
}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: any) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values: any) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (
    values: any,
    bag: { setTouched: (_arg0: {}) => void }
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form className="mb-2 w-80 max-w-screen-lg sm:w-96">
          <Typography>
            Step {stepNumber + 1} of {totalSteps}
          </Typography>
          {step}
          <div>
            {stepNumber > 0 && (
              <Button
                className="mt-4"
                fullWidth
                onClick={() => previous(formik.values)}
                type="button"
              >
                Back
              </Button>
            )}
            <div>
              <Button
                disabled={formik.isSubmitting}
                className="mt-4"
                fullWidth
                type="submit"
              >
                {isLastStep ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const WizardStep = ({ children }: IWizardStepProps) => children;

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

const App = () => {
  const { initialValues, handleSubmit } = useTraderSignUp();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card color="transparent" shadow={false} className="m-6">
        <Wizard initialValues={initialValues} onSubmit={handleSubmit}>
          <WizardStep
            onSubmit={() => console.log('Step1 onSubmit')}
            validationSchema={SignupSchema}
          >
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="my-1 font-normal">
              Enter details to create an account
            </Typography>
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
          </WizardStep>
          <WizardStep
            onSubmit={() => console.log('Step2 onSubmit')}
            validationSchema={Yup.object({
              companyName: Yup.string().required('Required'),
              contactNumber: Yup.string().required('Required'),
              address: Yup.string().required('Required'),
              description: Yup.string().required('Required'),
            })}
          >
            <Typography variant="h4" color="blue-gray">
              Shop Details
            </Typography>
            <Typography color="gray" className="my-1 font-normal">
              Enter Shop information to continue
            </Typography>
            <div className="mb-4 flex flex-col gap-4">
              <FormFieldLayout label="Shop Name" name="companyName" />
              <FormFieldLayout label="Contact Number" name="contactNumber" />
              <FormFieldLayout label="Address" name="address" />
              <FormFieldLayout label="Description" name="description" />
            </div>
          </WizardStep>
        </Wizard>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <Link
            href="/auth/SignIn"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700 underline"
          >
            Sign In
          </Link>
        </Typography>
      </Card>
    </div>
  );
};

export default App;

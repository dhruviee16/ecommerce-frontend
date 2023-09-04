import { Form, Formik, FormikConfig } from 'formik';
import React from 'react';

interface Props extends Omit<FormikConfig<any>, 'children'> {
  children?: React.ReactNode | Function;
  onSubmit: (_input: any) => Promise<any> | any;
  initalValues?: Record<string, any>;
}

const FormLayout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Formik revalidateMode="onBlur" {...props}>
      {!!children && typeof children === 'function' ? (
        ({ ...formikProps }) => {
          return children(formikProps);
        }
      ) : (
        <Form>{children}</Form>
      )}
    </Formik>
  );
};

export default FormLayout;

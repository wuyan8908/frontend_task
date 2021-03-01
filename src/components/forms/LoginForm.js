/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
      })}
      onSubmit={(values) => {
        this.props.onSubmit(values);
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="password">Password</label>
        <Field name="password" type="text" />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import css from './RegistrationForm.module.css';

import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .required('User name is required.')
      .min(2, 'User name must be at least 2 characters!')
      .max(50, 'User name must be at less than 50 characters!'),
    email: Yup.string()
      .required('Email is required.')
      .email('Must be a valid email!'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password must be at least 8 characters!'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field
            placeholder="Robbie Williams"
            type="text"
            name="name"
            className={css.input}
          />
          <ErrorMessage
            className={css.feedbackError}
            name="name"
            as="span"
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Email</span>
          <Field
            placeholder="williams@gmail.com"
            type="text"
            name="email"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            as="span"
            className={css.feedbackError}
            component="span"
          />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field
            placeholder="Enter your password"
            type="password"
            name="password"
            className={css.input}
          />
          <ErrorMessage
            name="password"
            as="span"
            className={css.feedbackError}
            component="span"
          />
        </label>
        <button
          type="submit"
          className={css.button}
          aria-label="Button for register new user"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

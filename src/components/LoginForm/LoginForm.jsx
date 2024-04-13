import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import css from './LoginForm.module.css';

import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required.')
      .email('Must be a valid email!'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password must be at least 8 characters!'),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Email</span>
          <Field
            placeholder="Your email"
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
            placeholder="********"
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
          aria-label="Button for log in user"
        >
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

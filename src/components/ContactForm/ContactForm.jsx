import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { Toaster } from 'react-hot-toast';

import css from './ContactForm.module.css';

import { addContact } from '../../redux/contacts/operations';
import { notifySuccessfull } from '../../services/notifications';

const ContactForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required')
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Number is not valid, enter please XXX-XXX-XXXX'
      ),
  });

  const dispatch = useDispatch();

  const addContacts = newContact => {
    dispatch(addContact(newContact));
  };

  const handleSubmit = (values, actions) => {
    addContacts(values);
    notifySuccessfull('You added a contact');
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <div className={css.spanContainer}>
              <MdPerson className={css.icon} />
              <span>Name</span>
            </div>
            <Field
              type="text"
              placeholder="Robbie Williams"
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
            <div className={css.spanContainer}>
              <MdPhone className={css.icon} />
              <span>Number</span>
            </div>
            <Field
              type="text"
              placeholder="XXX-XXX-XXXX"
              name="number"
              className={css.input}
            />
            <ErrorMessage
              name="number"
              as="span"
              className={css.feedbackError}
              component="span"
            />
          </label>
          <button
            type="submit"
            className={css.button}
            aria-label="Button for add contact"
          >
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};

export default ContactForm;

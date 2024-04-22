import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
const ContactForm = ({ onAdd, value }) => {
  const handleSubmit = (value, action) => {
    onAdd(value);
    action.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={value}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form className={css.formContainer}>
          <div className={css.formSearch}>
            <label htmlFor={nameId}>Name</label>
            <Field
              className={css.inputForm}
              type="text"
              name="name"
              id={nameId}
            />
            <ErrorMessage
              className={css.formError}
              name="name"
              component="span"
            />
          </div>
          <div className={css.formSearch}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css.inputForm}
              type="text"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              className={css.formError}
              name="number"
              component="span"
            />
          </div>
          <div className={css.formSearch}>
            <button className={css.formButton} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;

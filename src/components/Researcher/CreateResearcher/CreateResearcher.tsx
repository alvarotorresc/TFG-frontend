import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});

export default function CreateResearcher() {
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firsName"
        onChange={handleChange}
        value={values.firstName}
      ></input>
      <br />
      {errors.firstName ? errors.firstName : null}
      <br />
      <input
        name="lastName"
        onChange={handleChange}
        value={values.lastName}
      ></input>
      <br />
      {errors.lastName ? errors.lastName : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

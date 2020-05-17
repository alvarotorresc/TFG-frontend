import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { Form, Input, Button, Grid } from "semantic-ui-react";
import * as Yup from "yup";
import { urlImages } from "../utils/researcher.utils";
import "./createresearcher.css";
import { useHistory } from "react-router-dom";
import { ADD_RESEARCHER } from "../utils/graphql/researcher.graphql";
import { onError } from "@apollo/link-error";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  nationality: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number().required("Required").positive("Positive"),
});

export default function CreateResearcher() {
  const [addResearcher] = useMutation(ADD_RESEARCHER);

  let history = useHistory();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      nationality: "",
      age: "",
      rol: "researcher",
      image: "https://semantic-ui.com/images/avatar/large/steve.jpg",
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      addResearcher({
        variables: {
          ...values,
        },
      });
      resetForm();
      history.push("/researchers");
    },
  });

  return (
    <Grid centered textAlign="center" id="grid">
      <h1>Create a new Researcher</h1>
      <Form onSubmit={handleSubmit} size={"huge"}>
        <Input
          type="text"
          placeholder={"First Name"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          name="firstName"
          className="input"
        />
        <span className="error">
          {errors.firstName ? errors.firstName : null}
        </span>
        <Input
          type="text"
          placeholder={"Last Name"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          name="lastName"
          className="input"
        />
        <span className="error">
          {errors.lastName ? errors.lastName : null}
        </span>
        <br />
        <Input
          type="text"
          placeholder={"Email"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
          className="input"
        />
        <span className="error">{errors.email ? errors.email : null}</span>
        <Input
          type="password"
          placeholder={"Password"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name="password"
          className="input"
        />
        <span className="error">
          {errors.password ? errors.password : null}
        </span>
        <br />
        <Input
          type="text"
          placeholder={"Nationality"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.nationality}
          name="nationality"
          className="input"
        />
        <span className="error">
          {errors.nationality ? errors.nationality : null}
        </span>
        <Input
          type="number"
          placeholder={"Age"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          name="age"
          className="input"
        />
        <span className="error">{errors.age ? errors.age : null}</span>
        <br></br>
        <label htmlFor="Rol">
          <h1>Select a Rol</h1>
        </label>
        <Form.Radio
          className="radio"
          type="radio"
          label="Admin"
          id="admin"
          name="rol"
          style={{ fontSize: "25px", marginTop: "10px " }}
          onChange={() => setFieldValue("rol", "admin")}
          onBlur={handleBlur}
          value={values.rol}
          checked={values.rol === "admin"}
        ></Form.Radio>
        <Form.Radio
          type="radio"
          id="researcher"
          name="rol"
          label="Researcher"
          style={{ fontSize: "25px" }}
          onChange={() => setFieldValue("rol", "researcher")}
          onBlur={handleBlur}
          value={values.rol}
          checked={values.rol === "researcher"}
        ></Form.Radio>
        <br></br>
        <label htmlFor="Rol">
          <h1>Select a image</h1>
        </label>
        <Grid.Row style={{ marginTop: "6%" }}>
          <input
            type="radio"
            name="image"
            onChange={() => setFieldValue("image", urlImages[0])}
            onBlur={handleBlur}
            value={values.image}
            checked={values.image === urlImages[0]}
          />
          <img src={urlImages[0]} className="radioImage" alt="image1"></img>

          <input
            type="radio"
            name="image"
            onChange={() => setFieldValue("image", urlImages[1])}
            onBlur={handleBlur}
            value={values.image}
            checked={values.image === urlImages[1]}
          />
          <img src={urlImages[1]} className="radioImage" alt="image2"></img>

          <input
            type="radio"
            name="image"
            onChange={() => setFieldValue("image", urlImages[2])}
            onBlur={handleBlur}
            value={values.image}
            checked={values.image === urlImages[2]}
          />
          <img src={urlImages[2]} className="radioImage" alt="image3"></img>

          <input
            type="radio"
            name="image"
            onChange={() => setFieldValue("image", urlImages[3])}
            onBlur={handleBlur}
            value={values.image}
            checked={values.image === urlImages[3]}
          />
          <img src={urlImages[3]} className="radioImage" alt="image4"></img>

          <input
            type="radio"
            name="image"
            onChange={() => setFieldValue("image", urlImages[4])}
            onBlur={handleBlur}
            value={values.image}
            checked={values.image === urlImages[4]}
          />
          <img src={urlImages[4]} className="radioImage" alt="image5"></img>

          <input
            type="radio"
            name="image"
            onChange={() => setFieldValue("image", urlImages[5])}
            onBlur={handleBlur}
            value={values.image}
            checked={values.image === urlImages[5]}
          />
          <img src={urlImages[5]} className="radioImage" alt="image6"></img>
        </Grid.Row>
        <br />
        <Button type="submit" style={{ marginBottom: "50px" }} size="big">
          Submit
        </Button>
      </Form>
    </Grid>
  );
}

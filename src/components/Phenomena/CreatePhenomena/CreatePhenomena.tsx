import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { Form, Input, Button, Grid } from "semantic-ui-react";
import * as Yup from "yup";
import { CREATE_PHENOMENON } from "../utils/graphql/phenomena.graphql";
import "./createphenomena.css";
import { useHistory } from "react-router-dom";
import { Types } from "../utils/Phenomena.types";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  type: Yup.string().required("Required"),
  researcherId: Yup.number().required("Required").positive("Positive"),
});

function ToArray(type: any) {
  return Object.keys(type).map((key) => type[key]);
}

let typeOptions: Types[] = ToArray(Types);

export default function CreatePhenomena() {
  let history = useHistory();
  const [createPhenomenon] = useMutation(CREATE_PHENOMENON);
  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      title: "",
      description: "",
      researcherId: "",
      type: "",
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      console.log(values);
      createPhenomenon({
        variables: {
          ...values,
        },
      });
      resetForm();
      history.push("/phenomena");
    },
  });

  return (
    <Grid centered textAlign="center" id="grid">
      <h1>Create a new Phenomenon</h1>
      <Form onSubmit={handleSubmit} size={"huge"}>
        <Input
          type="number"
          placeholder={"ID"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.researcherId}
          name="researcherId"
          className="input"
        />
        <span className="error">
          {errors.researcherId ? errors.researcherId : null}
        </span>
        <br />
        <Input
          type="text"
          placeholder={"Title"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
          name="title"
          className="input"
        />
        <span className="error">{errors.title ? errors.title : null}</span>
        <Input
          type="text"
          placeholder={"Description"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.description}
          name="description"
          className="input"
        />
        <span className="error">
          {errors.description ? errors.description : null}
        </span>
        <br />
        <select
          name="type"
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" label="Select a type" />
          {typeOptions.map((option) => {
            return <option value={`${option}`} label={`${option}`}></option>;
          })}
        </select>
        <span className="error">{errors.type ? errors.type : null}</span>
        <br />
        <Button type="submit" style={{ margin: "50px" }} size="big">
          Submit
        </Button>
      </Form>
    </Grid>
  );
}

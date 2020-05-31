import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { Form, Button, Grid } from "semantic-ui-react";
import * as Yup from "yup";
import {
  CREATE_PHENOMENON,
  PHENOMENA_QUERY,
} from "../utils/graphql/phenomena.graphql";
import "./createphenomena.css";
import { useHistory } from "react-router-dom";
import { Types } from "../utils/Phenomena.types";
import { AuthContext } from "../../../context/auth/AuthContext";

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
});

function ToArray(type: any) {
  return Object.keys(type).map((key) => type[key]);
}

let typeOptions: Types[] = ToArray(Types);

export default function CreatePhenomena(id: any) {
  let history = useHistory();
  const [createPhenomenon] = useMutation(CREATE_PHENOMENON);
  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      title: "",
      description: "",
      researcherId: id.id,
      type: "",
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      createPhenomenon({
        variables: {
          ...values,
        },
        refetchQueries: [{ query: PHENOMENA_QUERY }],
      });
      resetForm();
      history.push("/phenomena");
    },
  });

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Grid centered textAlign="center" id="grid">
          <h1>Create a new Phenomenon</h1>
          <Form onSubmit={handleSubmit} size={"huge"} style={{ width: "100%" }}>
            <br />
            <Form.Input
              type="text"
              placeholder={"Title"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
              error={errors.title ? errors.title : null}
            />
            <Form.Input
              type="text"
              placeholder={"Description"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              name="description"
              error={errors.description ? errors.description : null}
            />
            <br />
            <select
              name="type"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ marginLeft: "13px" }}
            >
              <option value="" label="Select a type" />
              {typeOptions.map((option) => {
                return (
                  <option value={`${option}`} label={`${option}`}></option>
                );
              })}
            </select>
            <span className="error">{errors.type ? errors.type : null}</span>
            <br />
            <Button type="submit" style={{ margin: "50px" }} size="big">
              Submit
            </Button>
          </Form>
        </Grid>
      )}
    </AuthContext.Consumer>
  );
}

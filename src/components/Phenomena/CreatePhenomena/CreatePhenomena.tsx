import React from "react";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { Form, Input, Button, Grid } from "semantic-ui-react";
import * as Yup from "yup";
import { CREATE_PHENOMENON, TYPES_QUERY } from "../Phenomena.types";
import "./createphenomena.css";

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

let typeOptions: any[] = [];

function useGetTypes(): void {
  const { data, loading, error, refetch } = useQuery(TYPES_QUERY);
  if (!loading && data) {
    typeOptions = data.getPhenomena;
  }
  refetch();
}

export default function CreatePhenomena() {
  useGetTypes();
  const [createPhenomenon] = useMutation(CREATE_PHENOMENON);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    errors,
  } = useFormik({
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

        {console.log(typeOptions)}
        <select
          name="type"
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" label="Select a type" />
          {typeOptions.map((option) => {
            return (
              <option
                value={`${option.type}`}
                label={`${option.type}`}
              ></option>
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
  );
}

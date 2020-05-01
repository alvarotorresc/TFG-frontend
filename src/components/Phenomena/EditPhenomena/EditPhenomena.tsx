import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { Form, Input, Button, Grid } from "semantic-ui-react";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import {
  UPDATE_PHENOMENA,
  PHENOMENON_QUERY,
  TYPES_QUERY,
} from "../Phenomena.types";

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

export default function EditPhenomena() {
  useGetTypes();
  let history = useHistory();

  let { id } = useParams();
  id = String(id);
  let idR = parseInt(id);

  const [updatePhenomenon] = useMutation(UPDATE_PHENOMENA);

  const [phenomenon, setPhenomenon] = useState(Object);
  const { data, loading, refetch } = useQuery(PHENOMENON_QUERY, {
    variables: { idR },
  });

  useEffect(() => {
    if (!loading && data) {
      setPhenomenon(data);
    }
    refetch();
  }, [id, data, loading, refetch]);

  let description, title, type, researcherId, researcherFirst, researcherLast;

  if (phenomenon["getPhenomenon"]) {
    description = phenomenon.getPhenomenon.description;
    title = phenomenon.getPhenomenon.title;
    type = phenomenon.getPhenomenon.type;
    id = phenomenon.getPhenomenon.id;
    researcherId = phenomenon.getPhenomenon.researcher.id;
    researcherFirst = phenomenon.getPhenomenon.researcher.firstName;
    researcherLast = phenomenon.getPhenomenon.researcher.lastName;
  }

  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      description: description,
      title: title,
      type: type,
      researcherId: researcherId,
      id: id,
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      updatePhenomenon({
        variables: {
          ...values,
        },
      });
      refetch();
      resetForm();
      history.push("/phenomena");
    },
  });
  return (
    <Grid centered textAlign="center" id="grid">
      <h1>Edit an existing Phenomenon</h1>
      <Form onSubmit={handleSubmit} size={"huge"}>
        <Input
          disabled
          type="text"
          value={`${researcherFirst} ${researcherLast}`}
          name="researcherName"
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

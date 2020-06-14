import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import {
  Form,
  Button,
  Grid,
  Checkbox,
  TextArea,
  Select,
} from "semantic-ui-react";
import * as Yup from "yup";
import { CREATE_OCURRENCE } from "../utils/graphql/phenomena.graphql";
import { DateInput } from "semantic-ui-calendar-react";
import "./createocurrence.css";
import { useHistory, useParams } from "react-router-dom";
import { spainCities } from "../utils/Phenomena.types";

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  date: Yup.date().required(),
  city: Yup.string().required("Required"),
});

export default function CreateOcurrence() {
  let history = useHistory();

  let { phenomenonId } = useParams();
  let id = String(phenomenonId);
  id = id.trim();

  const [createPhenomenon] = useMutation(CREATE_OCURRENCE);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      description: "",
      phenomenaId: id,
      witness: false,
      resolved: false,
      date: "",
      city: "",
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      createPhenomenon({
        variables: {
          ...values,
        },
      });
      resetForm();
      history.push(`/phenomena/${values.phenomenaId}`);
    },
  });
  return (
    <Grid centered textAlign="center" id="grid">
      <Form onSubmit={handleSubmit} size={"huge"}>
        <h1>Create a new Ocurrence</h1>
        <TextArea
          type="textarea"
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
        <DateInput
          name="date"
          closable
          placeholder="Date"
          value={values.date}
          dateFormat={"YYYY-MM-DD"}
          iconPosition="left"
          style={{ marginLeft: "1px" }}
          onChange={(e, { name, value }) =>
            setFieldValue(name, new Date(value))
          }
        />
        <span className="error">
          {errors.phenomenaId ? errors.phenomenaId : null}
        </span>
        <br />
        <Checkbox
          slider
          label="Witness?"
          onChange={() => setFieldValue("witness", !values.witness)}
          onBlur={handleBlur}
          checked={values.witness}
          name="witness"
          className="input"
        />
        <br />
        <Checkbox
          slider
          label="Resolved?"
          onChange={() => setFieldValue("resolved", !values.resolved)}
          onBlur={handleBlur}
          checked={values.resolved}
          name="resolved"
          className="input"
        />
        <br />
        <select
          name="city"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" label="Select a city where occurs" />
          {spainCities.map((option) => {
            return <option value={`${option}`} label={`${option}`}></option>;
          })}
        </select>
        <br />
        <Button type="submit" style={{ margin: "50px" }} size="big">
          Submit
        </Button>
      </Form>
    </Grid>
  );
}

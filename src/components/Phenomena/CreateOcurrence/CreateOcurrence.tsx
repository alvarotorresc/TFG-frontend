import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import {
  Form,
  Input,
  Button,
  Grid,
  Checkbox,
  TextArea,
} from "semantic-ui-react";
import * as Yup from "yup";
import { CREATE_OCURRENCE } from "../Phenomena.types";
import { DateTimeInput } from "semantic-ui-calendar-react";
import "./createocurrence.css";

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  phenomenaId: Yup.number().required("Required").positive("Positive"),
  date: Yup.date().required(),
});

export default function CreateOcurrence() {
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
      phenomenaId: "",
      witness: false,
      resolved: false,
      ubication: { lat: 45, lng: 20 },
      date: "",
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
      <Form onSubmit={handleSubmit} size={"huge"}>
        <h1>Create a new Ocurrence</h1>
        <Input
          type="number"
          placeholder={"ID"}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phenomenaId}
          name="phenomenaId"
          className="input"
        />
        <span className="error">
          {errors.phenomenaId ? errors.phenomenaId : null}
        </span>
        <br />
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
        <DateTimeInput
          name="date"
          closable
          placeholder="Date Time"
          value={values.date}
          dateTimeFormat={"YYYY-MM-DD HH:MM:SS UTC"}
          iconPosition="left"
          onChange={(e, { name, value }) =>
            setFieldValue(name, new Date(value).toISOString())
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
        <Button type="submit" style={{ margin: "50px" }} size="big">
          Submit
        </Button>
      </Form>
    </Grid>
  );
}

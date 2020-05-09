import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import {
  Form,
  Input,
  Button,
  Grid,
  Checkbox,
  TextArea,
} from "semantic-ui-react";
import * as Yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import {
  UPDATE_OCURRENCE,
  OCURRENCE_QUERY,
} from "../utils/graphql/phenomena.graphql";
import { DateTimeInput } from "semantic-ui-calendar-react";

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  date: Yup.date().required(),
});
export default function EditOcurrence() {
  let history = useHistory();

  let { id } = useParams();
  id = String(id);

  const [updateOcurrence] = useMutation(UPDATE_OCURRENCE);

  const [ocurrence, setOcurrence] = useState(Object);
  const { data, loading, refetch } = useQuery(OCURRENCE_QUERY, {
    variables: { id },
  });

  useEffect(() => {
    if (!loading && data) {
      setOcurrence(data);
    }
    refetch();
  }, [data, loading, refetch]);

  let date, description, witness, resolved, phenomenaId: unknown, phenomenaName;

  if (ocurrence["getOcurrence"]) {
    description = ocurrence.getOcurrence.description;
    date = ocurrence.getOcurrence.date;
    witness = ocurrence.getOcurrence.witness;
    id = ocurrence.getOcurrence.id;
    resolved = ocurrence.getOcurrence.resolved;
    phenomenaId = ocurrence.getOcurrence.phenomena.id;
    phenomenaName = ocurrence.getOcurrence.phenomena.title;
  }

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id,
      description: description,
      phenomenaId: phenomenaId,
      witness: witness,
      resolved: resolved,
      date: date,
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      updateOcurrence({
        variables: {
          ...values,
        },
      });
      refetch();
      resetForm();
      history.push(`/phenomena/${phenomenaId}`);
    },
  });
  return (
    <Grid centered textAlign="center" id="grid">
      <Form onSubmit={handleSubmit} size={"huge"}>
        <h1>Create a new Ocurrence</h1>
        <Input
          disabled
          type="text"
          value={phenomenaName}
          name="phenomenaName"
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

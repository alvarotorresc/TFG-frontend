import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Input,
} from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UPDATE_OCURRENCE } from "../../Phenomena/utils/graphql/phenomena.graphql";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  const datalogin: any = "";
  const [signIn] = useMutation(LOGIN);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit(values, { resetForm }) {
      signIn({
        variables: {
          ...values,
        },
        update(cache, { data }) {
          console.log(data);
        },
      });
      resetForm();
    },
  });

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <div style={{ backgroundColor: "white" }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo192.png" /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Input
                fluid
                icon="user"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Input
                fluid
                icon="lock"
                iconPosition="left"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
                name="password"
                type="password"
              />

              <Button color="teal" fluid size="large" type="submit">
                Login
              </Button>
            </Segment>
          </Form>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default LoginForm;

import React from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  const history = useHistory();
  const [signIn] = useMutation(LOGIN, {
    onError: (error) => {
      if (error.graphQLErrors[0].message === "unknown_credentials") {
        alert("ERROR EN LAS CREDENCIALES");
      }
    },
    onCompleted: () => {
      history.push("/");
    },
  });
  const { login } = useAuth();
  let dataLogin = { accessToken: "", researcherId: "", type: "" };

  const { handleBlur, handleChange, handleSubmit, values, errors } = useFormik({
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
          dataLogin = data.login;
          loginAuth(dataLogin);
        },
      });
    },
  });

  function loginAuth(param: any) {
    login(dataLogin.accessToken, dataLogin.researcherId, dataLogin.type);
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
      centered
    >
      <Grid.Column style={{ maxWidth: 650 }}>
        <div style={{ backgroundColor: "white", alignContent: "center" }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo192.png" /> Log-in to your account
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                style={{ paddingRight: "5%" }}
                icon="user"
                name="email"
                type="email"
                error={errors.email ? true : null}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                error={errors.password ? true : null}
                fluid
                icon="lock"
                style={{ paddingRight: "5%" }}
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

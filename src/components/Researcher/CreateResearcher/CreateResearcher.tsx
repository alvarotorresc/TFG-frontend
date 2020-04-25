import React from "react";
import { Formik } from "formik";
import { gql, useMutation } from "@apollo/client";
import { Form, Input, Button, Grid } from "semantic-ui-react";
import { ADD_RESEARCHER } from "../Researcher.types";
import "./createresearcher.css";

const urlImages = [
  "https://semantic-ui.com/images/avatar/large/steve.jpg",
  "https://semantic-ui.com/images/avatar/large/helen.jpg",
  "https://semantic-ui.com/images/avatar/large/elliot.jpg",
  "https://semantic-ui.com/images/avatar2/large/kristy.png",
  "https://semantic-ui.com/images/avatar2/large/matthew.png",
  "https://semantic-ui.com/images/avatar/large/veronika.jpg",
];

export default function CreateResearcher() {
  const [addResearcher, { data }] = useMutation(ADD_RESEARCHER);

  return (
    <Grid centered textAlign="center" id="grid">
      <h1>Create a new Researcher</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          nationality: "",
          age: "",
          rol: "RESEARCHER",
          image: "https://semantic-ui.com/images/avatar/large/steve.jpg",
        }}
        onSubmit={(fields, { resetForm }) => {
          console.log(fields);
          /*addResearcher({
            variables: {
              ...fields,
            },
          });*/
          resetForm();
        }}
      >
        {(props) => (
          //<Grid></Grid>
          <Form onSubmit={props.handleSubmit} size={"huge"}>
            <Input
              type="text"
              placeholder={"First Name"}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.firstName}
              name="firstName"
              className="input"
            />
            <Input
              type="text"
              placeholder={"Last Name"}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.lastName}
              name="lastName"
              className="input"
            />
            <br />
            <Input
              type="text"
              placeholder={"Email"}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
              className="input"
            />
            <Input
              type="password"
              placeholder={"Password"}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              name="password"
              className="input"
            />
            <br />
            <Input
              type="text"
              placeholder={"Nationality"}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.nationality}
              name="nationality"
              className="input"
            />
            <Input
              type="number"
              placeholder={"Age"}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.age}
              name="age"
              className="input"
            />
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
              onChange={() => props.setFieldValue("rol", "ADMIN")}
              onBlur={props.handleBlur}
              value={props.values.rol}
              checked={props.values.rol === "ADMIN"}
            ></Form.Radio>
            <Form.Radio
              type="radio"
              id="researcher"
              name="rol"
              label="Researcher"
              style={{ fontSize: "25px" }}
              onChange={() => props.setFieldValue("rol", "RESEARCHER")}
              onBlur={props.handleBlur}
              value={props.values.rol}
              checked={props.values.rol === "RESEARCHER"}
            ></Form.Radio>
            <br></br>
            <label htmlFor="Rol">
              <h1>Select a image</h1>
            </label>
            <Grid.Row style={{ marginTop: "6%" }}>
              <input
                type="radio"
                name="image"
                onChange={() => props.setFieldValue("image", urlImages[0])}
                onBlur={props.handleBlur}
                value={props.values.image}
                checked={props.values.image === urlImages[0]}
              />
              <img src={urlImages[0]} className="radioImage"></img>

              <input
                type="radio"
                name="image"
                onChange={() => props.setFieldValue("image", urlImages[1])}
                onBlur={props.handleBlur}
                value={props.values.image}
                checked={props.values.image === urlImages[1]}
              />
              <img src={urlImages[1]} className="radioImage"></img>

              <input
                type="radio"
                name="image"
                onChange={() => props.setFieldValue("image", urlImages[2])}
                onBlur={props.handleBlur}
                value={props.values.image}
                checked={props.values.image === urlImages[2]}
              />
              <img src={urlImages[2]} className="radioImage"></img>

              <input
                type="radio"
                name="image"
                onChange={() => props.setFieldValue("image", urlImages[3])}
                onBlur={props.handleBlur}
                value={props.values.image}
                checked={props.values.image === urlImages[3]}
              />
              <img src={urlImages[3]} className="radioImage"></img>

              <input
                type="radio"
                name="image"
                onChange={() => props.setFieldValue("image", urlImages[4])}
                onBlur={props.handleBlur}
                value={props.values.image}
                checked={props.values.image === urlImages[4]}
              />
              <img src={urlImages[4]} className="radioImage"></img>

              <input
                type="radio"
                name="image"
                onChange={() => props.setFieldValue("image", urlImages[5])}
                onBlur={props.handleBlur}
                value={props.values.image}
                checked={props.values.image === urlImages[5]}
              />
              <img src={urlImages[5]} className="radioImage"></img>
            </Grid.Row>
            <br />
            <Button type="submit" style={{ marginBottom: "50px" }}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

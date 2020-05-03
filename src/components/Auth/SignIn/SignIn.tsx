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

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <div style={{ backgroundColor: "white" }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo192.png" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </div>
    </Grid.Column>
  </Grid>
);

export default LoginForm;

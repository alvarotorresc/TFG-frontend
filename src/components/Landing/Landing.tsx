import React from "react";
import {
  Header,
  Container,
  Grid,
  Segment,
  Button,
  Image,
  Icon,
} from "semantic-ui-react";

export default function Landing() {
  return (
    <div>
      <Header
        as="h1"
        style={{
          marginTop: "100px",
          fontSize: "80px",
        }}
      >
        Welcome to PhenoAPP
      </Header>
      <Container
        text
        style={{
          fontSize: "30px",
          color: "#383838",
        }}
      >
        Is a full-stack app for my end-of-degree project made entirely with open
        source technologies and libraries Consist in a web app where you can see
        and manage paranormal phenomena around the world
      </Container>

      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2.7em" }}>
                Strangest Phenomena of the World
              </Header>
              <p style={{ fontSize: "1.6em" }}>
                Our app manage the stangest phenomena of the world by the best
                researchers
              </p>
              <Grid.Column textAlign="center">
                <Button size="huge" basic color="black">
                  Check Them Out
                  <Icon className="hand point right" />
                </Button>
              </Grid.Column>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                See our researchers
              </Header>
              <Grid.Column textAlign="center">
                <Button icon labelPosition="right" basic color="black">
                  Go there
                  <Icon className="user secret" />
                </Button>
              </Grid.Column>
              <Image
                centered
                rounded
                style={{ width: "20%", marginTop: "10px" }}
                src="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
              />
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Read our posts about the phenomena
              </Header>
              <Button icon labelPosition="right" basic color="black">
                Go there
                <Icon className="newspaper outline" />
              </Button>
              <Image
                centered
                rounded
                style={{ width: "20%", marginTop: "10px" }}
                src="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_960_720.jpg"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

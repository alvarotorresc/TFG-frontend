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
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="Landing">
      <Header as="h1" id="header">
        Welcome to PhenoAPP
      </Header>
      <Container text id="mainContainer">
        Is a full-stack app for my end-of-degree project made entirely with open
        source technologies and libraries Consist in a web app where you can see
        and manage paranormal phenomena around the world
      </Container>

      <Segment id="segment1" vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" id="header1">
                Strangest Phenomena of the World
              </Header>
              <p id="p1">
                Our app manage the stangest phenomena of the world by the best
                researchers
              </p>
              <Grid.Column textAlign="center">
                <Link to="/phenomena">
                  <Button size="huge" basic color="black">
                    Check Them Out
                    <Icon className="hand point right" />
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                centered
                size="large"
                src="https://cdn.pixabay.com/photo/2016/07/02/12/21/eclipse-1492818_960_720.jpg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
        </Grid>
      </Segment>

      <Segment vertical id="segment2">
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column id="column1">
              <Header as="h3" id="header2">
                See our researchers
              </Header>
              <Grid.Column textAlign="center">
                <Link to="/researchers">
                  <Button icon labelPosition="right" basic color="black">
                    Go there
                    <Icon className="user secret" />
                  </Button>
                </Link>
              </Grid.Column>
              <Image
                centered
                rounded
                className="imageLanding"
                src="https://cdn.pixabay.com/photo/2019/11/19/22/24/watch-4638673_960_720.jpg"
              />
            </Grid.Column>
            <Grid.Column id="column1">
              <Header as="h3" id="header2">
                Read our posts
              </Header>
              <Link to="/posts">
                <Button icon labelPosition="right" basic color="black">
                  Go there
                  <Icon className="newspaper outline" />
                </Button>
              </Link>
              <Image
                centered
                rounded
                className="imageLanding"
                src="https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_960_720.jpg"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

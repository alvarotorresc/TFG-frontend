import React from "react";
import Researcher from "../Researcher/Researcher";
import { Grid, Header, Icon } from "semantic-ui-react";

export default function ResearcherList() {
  return (
    <div>
      <Header as="h2" icon textAlign="center" style={{ paddingTop: "100px" }}>
        <Icon name="user secret" circular />
        <Header.Content>Researchers</Header.Content>
      </Header>
      <Grid
        columns="equal"
        centered
        style={{ padding: "8%", marginLeft: "8px" }}
        stackable
      >
        <Grid.Row style={{ marginBottom: "50px" }}>
          <Grid.Column>
            <Researcher
              header="Alvaro Torres Carrasco"
              meta="Researcher"
              description="A very good researcher"
              date="Joined 2015"
            />
          </Grid.Column>
          <Grid.Column>
            <Researcher
              header="Alvaro Torres Carrasco"
              meta="Researcher"
              description="A very good researcher"
              date="Joined 2015"
            />
          </Grid.Column>
          <Grid.Column>
            <Researcher
              header="Alvaro Torres Carrasco"
              meta="Researcher"
              description="A very good researcher"
              date="Joined 2015"
            />
          </Grid.Column>
          <Grid.Column>
            <Researcher
              header="Alvaro Torres Carrasco"
              meta="Researcher"
              description="A very good researcher"
              date="Joined 2015"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

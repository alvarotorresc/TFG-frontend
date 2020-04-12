import React from "react";
import { Segment, Loader, Dimmer, Image, Grid } from "semantic-ui-react";

export default function Loading() {
  return (
    <Grid stackable centered>
      <Segment style={{ margin: "10%" }}>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      </Segment>
    </Grid>
  );
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import researcher from "../../../models/researcher";
import { Grid, Header, Icon, Image, Label } from "semantic-ui-react";
import Researcher from "../Researcher/Researcher";
import { parse } from "path";

const RESEARCHER_QUERY = gql`
  query getResearcher($idR: Int!) {
    getResearcher(id: $idR) {
      id
      firstName
      lastName
      email
      age
      rol
      nationality
    }
  }
`;

type AppProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  rol: string;
  nationality: string;
  researcher: researcher;
};

export default function ResearcherDetail() {
  let { id } = useParams();
  id = String(id);
  let idR = parseInt(id);

  const [researcher, setresearcher] = useState(Object);
  const { data, loading, error } = useQuery(RESEARCHER_QUERY, {
    variables: { idR },
  });

  useEffect(() => {
    if (!loading && data) {
      setresearcher(data);
    }
  }, [id, data, loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  if (researcher["getResearcher"]) {
    const {
      id,
      firstName,
      lastName,
      email,
      age,
      rol,
      nationality,
    } = researcher.getResearcher;
    return (
      <div>
        <Header as="p" icon textAlign="center" style={{ paddingTop: "30px" }}>
          <Icon name="user" />
        </Header>
        <Grid style={{ padding: "4%" }} stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                label={{
                  color: "black",
                  corner: "right",
                  icon: "user secret",
                }}
              />
            </Grid.Column>
            <Grid.Column
              width={8}
              verticalAlign="middle"
              style={{ fontSize: "35px" }}
            >
              <p>
                <Icon name="user circle" />
                {` ${firstName} ${lastName}`}
              </p>
              <p>
                <Icon name="info circle" />
                {age}
              </p>
              <p>
                <Icon name="at" />
                {email}
              </p>
              <p>
                {" "}
                <Icon name="tag" />
                {rol.toLowerCase()}
              </p>
              <p>
                <Icon name="flag" />
                {nationality}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return <p>p</p>;
}

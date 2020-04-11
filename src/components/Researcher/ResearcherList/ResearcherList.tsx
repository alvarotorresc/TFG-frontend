import React, { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid, Header, Icon } from "semantic-ui-react";
import researcher from "../../../models/researcher";
import Researcher from "../Researcher/Researcher";

const RESEARCHERS_QUERY = gql`
  {
    getResearchers {
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

export default function ResearcherList() {
  const { data, loading, error, refetch } = useQuery(RESEARCHERS_QUERY);
  const [researchers, setResearchers] = useState<any>(Object);

  useEffect(() => {
    if (!loading && data) {
      setResearchers(data);
    }
    refetch();
  }, [data, loading, refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (researchers["getResearchers"])
    return (
      <div>
        <Header as="h1" icon textAlign="center" style={{ paddingTop: "30px" }}>
          <Icon name="user secret" circular />
          <Header.Content>Researchers</Header.Content>
        </Header>
        <Grid style={{ padding: "6%" }} stackable>
          <Grid.Row>
            {researchers.getResearchers.map(
              ({
                id,
                firstName,
                lastName,
                age,
                email,
                rol,
                nationality,
              }: AppProps) => {
                return (
                  <Researcher
                    key={id}
                    id={id}
                    name={`${firstName}  ${lastName}`}
                    email={email}
                    age={age}
                    rol={rol}
                    nationality={nationality}
                  />
                );
              }
            )}
          </Grid.Row>
        </Grid>
      </div>
    );

  return <p>p</p>;
}

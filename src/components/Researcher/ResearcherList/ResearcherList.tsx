import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Header, Icon } from "semantic-ui-react";
import Researcher from "../Researcher/Researcher";
import Loading from "../../Layout/Loading/Loading";
import { ResearcherProps, RESEARCHERS_QUERY } from "../Researcher.types";

export default function ResearcherList() {
  const { data, loading, error, refetch } = useQuery(RESEARCHERS_QUERY);
  const [researchers, setResearchers] = useState<any>(Object);

  useEffect(() => {
    if (!loading && data) {
      setResearchers(data);
    }
    refetch();
  }, [data, loading, refetch]);

  if (loading) return <Loading />;
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
                image,
              }: ResearcherProps) => {
                return (
                  <Researcher
                    key={id}
                    id={id}
                    name={`${firstName}  ${lastName}`}
                    email={email}
                    age={age}
                    rol={rol}
                    image={image}
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

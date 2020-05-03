import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Grid, Header, Icon } from "semantic-ui-react";
import Researcher from "../Researcher/Researcher";
import Loading from "../../Layout/Loading/Loading";
import {
  ResearcherProps,
  RESEARCHERS_QUERY,
  DELETE_RESEARCHER,
} from "../Researcher.types";

export default function ResearcherList() {
  const { data, loading, error, refetch } = useQuery(RESEARCHERS_QUERY);
  const [researchers, setResearchers] = useState<any>(Object);
  const [deleteResearcher] = useMutation(DELETE_RESEARCHER);

  async function handleDelete(id: number) {
    await deleteResearcher({
      variables: {
        id,
      },
    });
    refetch();
  }

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
                phenomena,
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
                    phenomena={phenomena}
                    handleDelete={handleDelete}
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

import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  PHENOMENA_QUERY,
  DELETE_PHENOMENON,
} from "../utils/graphql/phenomena.graphql";
import Loading from "../../Layout/Loading/Loading";
import { Grid, Header, Icon } from "semantic-ui-react";
import Phenomenon from "../Phenomenon/Phenomenon";
import { PhenomenaProps } from "../utils/props/phenomena.props";

export default function PhenomenaList() {
  const [phenomena, setPhenomena] = useState<any>(Object);
  const { data, loading, error, refetch } = useQuery(PHENOMENA_QUERY);
  const [deletePhenomenon] = useMutation(DELETE_PHENOMENON);

  async function handleDelete(id: String) {
    console.log(id);
    await deletePhenomenon({
      variables: {
        id,
      },
    });
    refetch();
  }

  useEffect(() => {
    if (!loading && data) {
      setPhenomena(data);
    }
    refetch();
  }, [data, loading, refetch]);

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  if (phenomena["getPhenomena"]) {
    return (
      <div>
        <Header as="h1" icon textAlign="center" style={{ paddingTop: "30px" }}>
          <Icon name="image outline" circular />
          <Header.Content>Phenomena List</Header.Content>
        </Header>
        <Grid style={{ padding: "4%" }} columns={2} stackable>
          <Grid.Row>
            {phenomena.getPhenomena.map(
              ({
                id,
                description,
                type,
                researcher,
                title,
              }: PhenomenaProps) => {
                return (
                  <Grid.Column width={8}>
                    <Phenomenon
                      id={id}
                      description={description}
                      type={type}
                      researcher={researcher}
                      title={title}
                      handleDelete={handleDelete}
                    ></Phenomenon>
                  </Grid.Column>
                );
              }
            )}
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return <p>p</p>;
}

import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { PHENOMENA_QUERY, PhenomenaProps } from "../Phenomena.types";
import Loading from "../../Layout/Loading/Loading";
import { Grid, Header, Icon, Card, Image } from "semantic-ui-react";

function capitalize(string: string) {
  return string.replace(/\w\S*/g, function (word) {
    return word.charAt(0) + word.slice(1).toLowerCase();
  });
}

export default function PhenomenaList() {
  const [phenomena, setPhenomena] = useState<any>(Object);
  const { data, loading, error } = useQuery(PHENOMENA_QUERY);

  useEffect(() => {
    if (!loading && data) {
      setPhenomena(data);
    }
  }, [data, loading]);

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  if (phenomena["getPhenomena"]) {
    return (
      <div>
        <Header as="h1" icon textAlign="center" style={{ paddingTop: "30px" }}>
          <Icon name="user secret" circular />
          <Header.Content>Phenomena List</Header.Content>
        </Header>
        <Grid style={{ padding: "4%" }} columns={2} stackable>
          <Grid.Row>
            {phenomena.getPhenomena.map(
              ({ id, description, type, researcher }: PhenomenaProps) => {
                return (
                  <Grid.Column width={8} key={id}>
                    <Card
                      centered
                      fluid
                      key={id}
                      style={{ marginBottom: "3%", minHeight: "200px" }}
                    >
                      <Card.Content style={{ fontSize: "25px" }} extra={true}>
                        <Image
                          floated="right"
                          circular
                          size="tiny"
                          src={researcher.image}
                          as="a"
                          href={`http://localhost:3000/researchers/${researcher.id}`}
                          target="_blank"
                        />
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta
                          style={{ marginTop: "10px", fontSize: "20px" }}
                        >
                          {`${capitalize(type)} - ${researcher.firstName} ${
                            researcher.lastName
                          }`}
                        </Card.Meta>
                        <Card.Description style={{ marginTop: "45px" }}>
                          {description}
                        </Card.Description>
                      </Card.Content>
                    </Card>
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

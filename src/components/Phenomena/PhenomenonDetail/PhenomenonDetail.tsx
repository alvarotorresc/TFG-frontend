import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import {
  PHENOMENON_QUERY,
  DELETE_OCURRENCE,
} from "../utils/graphql/phenomena.graphql";
import Loading from "../../Layout/Loading/Loading";
import { Header, Icon, Grid, Image, Divider, Button } from "semantic-ui-react";
import Ocurrence from "../Ocurrence/Ocurrence";
import { OcurrencesProps } from "../utils/props/phenomena.props";
import { sortedAscendantDate } from "../../Researcher/utils/researcher.utils";
import { AuthContext } from "../../../context/auth/AuthContext";

export default function PhenomenonDetail() {
  let { id } = useParams();

  id = id?.trim();

  const [phenomenon, setPhenomenon] = useState(Object);
  const [deleteOcurrence] = useMutation(DELETE_OCURRENCE);
  const { data, loading, error, refetch } = useQuery(PHENOMENON_QUERY, {
    variables: { id },
  });
  const [ocurrencesState, setocurrences] = useState(null);

  async function handleDelete(id: String) {
    await deleteOcurrence({
      variables: {
        id,
      },
    });
    refetch();
  }

  useEffect(() => {
    if (!loading && data) {
      setPhenomenon(data);
      setocurrences(
        data.getPhenomenon?.ocurrences.slice().sort(sortedAscendantDate)
      );
    }
    refetch();
  }, [id, data, loading, refetch]);

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;
  if (phenomenon["getPhenomenon"]) {
    const { title, description, type, researcher } = phenomenon.getPhenomenon;

    const isOcurrences = phenomenon.getPhenomenon.ocurrences.length;

    return (
      <AuthContext.Consumer>
        {(auth) => (
          <div>
            <Header
              as="p"
              icon
              textAlign="center"
              style={{ paddingTop: "30px" }}
            >
              <Icon name="file alternate outline" />
            </Header>
            <Grid style={{ padding: "4%" }} stackable>
              <Grid.Row>
                <Grid.Column
                  width={8}
                  verticalAlign="middle"
                  style={{ fontSize: "35px" }}
                >
                  <p style={{ fontSize: "55px" }}>{title}</p>
                  <p>
                    <Icon name="tag" />
                    {type}
                  </p>
                  <p>
                    <Icon name="book" />
                    {description}
                  </p>
                  <Link to={`/researchers/${researcher.id}`}>
                    <Icon name="user circle" />
                    {`${researcher.firstName} ${researcher.lastName}`}
                  </Link>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Image
                    src={
                      "https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_960_720.jpg"
                    }
                    circular
                  />
                </Grid.Column>
              </Grid.Row>
              <Divider horizontal style={{ fontSize: "30px" }}>
                Ocurrences
              </Divider>
              {auth.loggedIn && auth.researcherId === researcher.id && (
                <Button
                  as={Link}
                  to={`/ocurrence/create/${id}`}
                  icon="add"
                  labelPosition="left"
                  content="Create Ocurrence"
                />
              )}

              {isOcurrences === 0 ? (
                <Grid.Row centered style={{ minHeight: "85px" }}>
                  <h1>There are not ocurrences yet</h1>
                </Grid.Row>
              ) : (
                // @ts-ignore
                ocurrencesState.map((ocurrence: OcurrencesProps) => {
                  return (
                    <Grid.Row centered stretched key={ocurrence.id}>
                      <Ocurrence
                        id={ocurrence.id}
                        editable={auth.researcherId === researcher.id}
                        date={ocurrence.date}
                        ubication={ocurrence.ubication}
                        witness={ocurrence.witness}
                        resolved={ocurrence.resolved}
                        description={ocurrence.description}
                        key={ocurrence.id}
                        handleDelete={handleDelete}
                      />
                    </Grid.Row>
                  );
                })
              )}
            </Grid>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
  return (
    <div style={{ padding: "20%" }}>
      <h1>No one phenomena with this ID</h1>
      <Button as={Link} to="/phenomena">
        Go Phenomena
      </Button>
    </div>
  );
}

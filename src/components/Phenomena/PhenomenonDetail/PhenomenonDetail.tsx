import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import {
  PHENOMENON_QUERY,
  DELETE_OCURRENCE,
} from "../utils/graphql/phenomena.graphql";
import Loading from "../../Layout/Loading/Loading";
import { Header, Icon, Grid, Image, Divider } from "semantic-ui-react";
import Ocurrence from "../Ocurrence/Ocurrence";
import { OcurrencesProps } from "../utils/props/phenomena.props";

export default function PhenomenonDetail() {
  let { id } = useParams();

  const [phenomenon, setPhenomenon] = useState(Object);
  const [deleteOcurrence] = useMutation(DELETE_OCURRENCE);
  const { data, loading, error, refetch } = useQuery(PHENOMENON_QUERY, {
    variables: { id },
  });

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
    }
    refetch();
  }, [id, data, loading, refetch]);

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;
  if (phenomenon["getPhenomenon"]) {
    const {
      title,
      description,
      type,
      researcher,
      ocurrences,
    } = phenomenon.getPhenomenon;

    const isOcurrences = phenomenon.getPhenomenon.ocurrences.length;

    return (
      <div>
        <Header as="p" icon textAlign="center" style={{ paddingTop: "30px" }}>
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
              <p>
                <Icon name="user circle" />
                {`${researcher.firstName} ${researcher.lastName}`}
              </p>
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
          {isOcurrences === 0 ? (
            <Grid.Row centered style={{ minHeight: "85px" }}>
              <h1>There are not ocurrences yet</h1>
            </Grid.Row>
          ) : (
            ocurrences.map((ocurrence: OcurrencesProps) => {
              return (
                <Grid.Row centered stretched>
                  <Ocurrence
                    id={ocurrence.id}
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
    );
  }
  return <p>p</p>;
}

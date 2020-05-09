import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Grid, Header, Icon, Image } from "semantic-ui-react";
import Loading from "../../Layout/Loading/Loading";
import { RESEARCHER_QUERY } from "../utils/graphql/researcher.graphql";
import "./detail.css";
import phenomenon from "../../../models/phenomenon";

export default function ResearcherDetail() {
  let { id } = useParams();

  id = id?.trim();

  const [researcher, setresearcher] = useState<any>(Object);
  const { data, loading, error } = useQuery(RESEARCHER_QUERY, {
    variables: { id },
  });

  console.log(loading, error, data, researcher, id);

  useEffect(() => {
    if (!loading && data) {
      setresearcher(data);
    }
  }, [data, loading, researcher, id]);

  if (loading) return <Loading />;
  if (error) return <p>Error :</p>;

  if (researcher["researcher"]) {
    const {
      firstName,
      lastName,
      email,
      age,
      rol,
      nationality,
      image,
      phenomena,
    } = researcher.researcher;
    return (
      <div>
        <Header as="p" icon textAlign="center" style={{ paddingTop: "30px" }}>
          <Icon name="user" />
        </Header>
        <Grid style={{ padding: "4%" }} stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image
                src={image}
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
              <h1>Phenomena Investigated </h1>
              <div
                className="divPheno"
                style={{
                  borderRadius: "20px",
                  padding: "5px",
                  color: "white",
                }}
              >
                {phenomena.map((phenomenon: phenomenon) => {
                  return (
                    <Link to={`/phenomena/${phenomenon.id}`}>
                      <p style={{ color: "white", fontStyle: "bold" }}>
                        {phenomenon.title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return <p>p</p>;
}

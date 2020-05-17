import React, { useState, useEffect } from "react";
import { Grid, Header, Icon, Select } from "semantic-ui-react";
import Researcher from "../Researcher/Researcher";
import { ResearcherProps } from "../utils/props/researcher.props";
import { sortedAscendant, sortedDescendant } from "../utils/researcher.utils";

const rolOptions = ["admin", "researcher"];

function ResearcherList({ researchers, handleDelete, refetch }: any) {
  const [researchersState, setResearchers] = useState<any>([]);
  const [isOrdered, setOrdered] = useState<boolean>(false);
  const [isFiltered, setFiltered] = useState<boolean>(false);

  useEffect(() => {
    setResearchers(researchers);
    refetch();
  }, [researchers, refetch]);

  function order() {
    setOrdered(!isOrdered);
    setResearchers(
      researchersState
        .slice()
        .sort(isOrdered ? sortedAscendant : sortedDescendant)
    );
  }

  function filter(e: any) {
    const rol = e.target.value;

    if (isFiltered) {
      setResearchers(researchers);
    }

    if (rol === "") {
      setResearchers(researchers);
      setFiltered(false);
    } else {
      setResearchers(researchers.filter((res: any) => res.rol === rol));
      setFiltered(true);
    }
  }

  return (
    <div>
      <Header as="h1" icon textAlign="center" style={{ paddingTop: "30px" }}>
        <Icon name="user secret" circular />
        <Header.Content>Researchers</Header.Content>
      </Header>

      <button onClick={order}>order</button>

      <select id="selectRol" onChange={filter}>
        <option value="" label="Select a type" />
        {rolOptions.map((option) => {
          return <option value={`${option}`}>{option}</option>;
        })}
      </select>

      <Grid style={{ padding: "6%" }} stackable>
        <Grid.Row>
          {researchersState.map(
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
            }: ResearcherProps) => (
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
            )
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ResearcherList;

import React, { useState, useEffect } from "react";
import { Grid, Header, Icon, Button } from "semantic-ui-react";
import Phenomenon from "../Phenomenon/Phenomenon";
import { PhenomenaProps } from "../utils/props/phenomena.props";
import {
  sortedAscendant,
  sortedDescendant,
  Types,
} from "../../Phenomena/utils/Phenomena.types";
import { Link } from "react-router-dom";

function ToArray(type: any) {
  return Object.keys(type).map((key) => type[key]);
}

let typeOptions: Types[] = ToArray(Types);

function PhenomenaList({ phenomena, handleDelete, refetch }: any) {
  const [phenomenaState, setPhenomena] = useState<any>([]);
  const [isOrdered, setOrdered] = useState<boolean>(false);
  const [isFiltered, setFiltered] = useState<boolean>(false);

  useEffect(() => {
    setPhenomena(phenomena.slice().sort(sortedAscendant));
    if (refetch) {
      refetch();
    }
  }, [phenomena, refetch]);

  function order() {
    setOrdered(!isOrdered);
    setPhenomena(
      phenomenaState
        .slice()
        .sort(isOrdered ? sortedAscendant : sortedDescendant)
    );
  }

  function filter(e: any) {
    const rol = e.target.value;

    if (isFiltered) {
      setPhenomena(phenomena);
    }

    if (rol === "") {
      setPhenomena(phenomena);
      setFiltered(false);
    } else {
      setPhenomena(phenomena.filter((res: any) => res.type === rol));
      setFiltered(true);
    }
  }

  return (
    <div>
      <Header as="h1" icon textAlign="center" style={{ paddingTop: "30px" }}>
        <Icon name="image outline" circular />
        <Header.Content>Phenomena List</Header.Content>
      </Header>
      <Button as={Link} to="/phenomenon/create">
        Create
      </Button>
      <Button onClick={order} icon labelPosition="right">
        {isOrdered ? (
          <Icon name="arrow circle up" />
        ) : (
          <Icon name="arrow circle down" />
        )}
        order
      </Button>
      <select className="select-css" onChange={filter}>
        <option value="" label="Select a type" />
        {typeOptions.map((option) => {
          return <option value={`${option}`}>{option}</option>;
        })}
      </select>
      <Grid style={{ padding: "4%" }} columns={2} stackable>
        <Grid.Row>
          {phenomenaState.map(
            ({ id, description, type, researcher, title }: PhenomenaProps) => {
              return (
                <Grid.Column width={8} key={id}>
                  <Phenomenon
                    id={id}
                    key={id}
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

export default PhenomenaList;

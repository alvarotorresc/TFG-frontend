import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

type CardProps = {
  id: number;
  name: string;
  email: string;
  age: number;
  rol: string;
  nationality: string;
};

function extra(email: string) {
  return (
    <div>
      <Icon name="mail" />
      {email}
    </div>
  );
}

function nameLink(name: string, id: number) {
  return (
    <div>
      <Link
        to={{ pathname: `/researchers/${id} ` }}
        style={{ fontSize: "25px", color: "black" }}
      >
        {name}
      </Link>
    </div>
  );
}

export default function Researcher({
  id,
  name,
  email,
  age,
  rol,
  nationality,
}: CardProps) {
  return (
    <Card
      image="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
      header={nameLink(name, id)}
      meta={rol}
      description={`This researcher is ${age} and is ${nationality}`}
      key={id}
      extra={extra(email)}
      centered
      style={{ marginTop: "0", marginBottom: "50px" }}
    />
  );
}

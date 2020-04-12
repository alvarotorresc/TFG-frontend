import React from "react";
import { Card, Icon, CardProps } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
  image,
}: CardProps) {
  return (
    <Card
      image={image}
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

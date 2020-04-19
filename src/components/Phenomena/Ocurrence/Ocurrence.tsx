import React from "react";
import { OcurrencesProps } from "../Phenomena.types";
import { Container, Card, Icon } from "semantic-ui-react";
import "./Ocurrence.css";

function seeCorrectDate(date: Date) {
  let stringDate = String(date);
  let day = stringDate.substring(0, 10);
  let time = stringDate.substring(11, 16);
  stringDate = `${day} ${time}`;
  return stringDate;
}

function seeCorrectJson(jsonD: any) {
  if (jsonD) {
    return `${jsonD.lat}º - ${jsonD.lng}º   `;
  }
}

function seeCorrectBoolean(bool: boolean) {
  if (bool) {
    return (
      <p>
        <Icon name="check" />
        {String(bool)}
      </p>
    );
  } else {
    return (
      <p>
        <Icon name="close" />
        {String(bool)}
      </p>
    );
  }
}

export default function Ocurrence({
  id,
  date,
  ubication,
  description,
  witness,
  resolved,
}: OcurrencesProps) {
  return (
    <Container fluid style={{ minWidth: "100%" }}>
      <Card fluid raised key={id}>
        <Card.Header>
          <h1 style={{ fontSize: "40px" }}>
            <Icon name="calendar" />
            {seeCorrectDate(date)}
          </h1>
        </Card.Header>
        <Card.Description>
          <p style={{ fontSize: "30px" }}>{description}</p>
        </Card.Description>
        {seeCorrectJson(ubication)}
        <Card.Content extra>
          <div style={{ fontSize: "20px" }}>
            Are there witnesses? {seeCorrectBoolean(witness)}
            Is resolved?
            {seeCorrectBoolean(resolved)}
          </div>
        </Card.Content>
      </Card>{" "}
    </Container>
  );
}

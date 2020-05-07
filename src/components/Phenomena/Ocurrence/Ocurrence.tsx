import React, { useState } from "react";
import { OcurrencesProps } from "../utils/props/phenomena.props";
import { Container, Card, Icon, Button, Confirm } from "semantic-ui-react";
import "./Ocurrence.css";

let e = "e";

function seeCorrectDate(date: Date) {
  let stringDate = String(date);
  let day = stringDate.substring(0, 10);
  let time = stringDate.substring(11, 16);
  stringDate = `${day} /  ${time}h`;
  return stringDate;
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
  handleDelete,
}: OcurrencesProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  function deleteOcurrence() {
    handleDelete(id);
    setOpen(false);
  }

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
        <Card.Content extra>
          <div style={{ fontSize: "20px" }}>
            Are there witnesses? {seeCorrectBoolean(witness)}
            Is resolved?
            {seeCorrectBoolean(resolved)}
          </div>
        </Card.Content>
        {e === "e" && (
          <Card.Content extra>
            <div className="ui two buttons delete">
              <Button
                basic
                color="red"
                style={{ marginTop: "10px" }}
                className="delete"
                onClick={() => setOpen(!isOpen)}
              >
                Delete
              </Button>
              <Confirm
                open={isOpen}
                onCancel={() => setOpen(!isOpen)}
                onConfirm={deleteOcurrence}
              />
            </div>
          </Card.Content>
        )}
      </Card>
    </Container>
  );
}

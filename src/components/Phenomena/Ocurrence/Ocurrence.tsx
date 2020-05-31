import React, { useState } from "react";
import { OcurrencesProps } from "../utils/props/phenomena.props";
import { Container, Card, Icon, Button, Confirm } from "semantic-ui-react";
import "./Ocurrence.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContext";

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
  description,
  witness,
  resolved,
  handleDelete,
  editable,
}: OcurrencesProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  function deleteOcurrence() {
    handleDelete(id);
    setOpen(false);
  }

  return (
    <AuthContext.Consumer>
      {(auth) => (
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
            {auth.loggedIn && editable && (
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

                  <Button
                    as={Link}
                    basic
                    color="blue"
                    style={{ marginTop: "10px" }}
                    className="delete"
                    to={{ pathname: `/ocurrence/edit/${id}` }}
                  >
                    Edit
                  </Button>
                </div>
              </Card.Content>
            )}
          </Card>
        </Container>
      )}
    </AuthContext.Consumer>
  );
}

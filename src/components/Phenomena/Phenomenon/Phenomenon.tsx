import React, { useState } from "react";
import { PhenomenaProps } from "../utils/props/phenomena.props";
import { Card, Image, Button, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContext";

function capitalize(string: string) {
  return string.replace(/\w\S*/g, function (word) {
    return word.charAt(0) + word.slice(1).toLowerCase();
  });
}

function nameLink(name: string, id: String) {
  return (
    <div>
      <Link
        to={{ pathname: `/phenomena/${id} ` }}
        style={{ fontSize: "25px", color: "black" }}
      >
        {name}
      </Link>
    </div>
  );
}

export default function Phenomenon({
  id,
  description,
  type,
  researcher,
  title,
  handleDelete,
}: PhenomenaProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  function deleteResearcher() {
    handleDelete(id);
    setOpen(false);
  }
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Card
          centered
          fluid
          key={id}
          style={{ marginBottom: "3%", minHeight: "200px" }}
        >
          <Card.Content style={{ fontSize: "25px" }} extra={true}>
            <Image
              floated="right"
              circular
              size="tiny"
              src={researcher.image}
              as="a"
              href={`http://localhost:3000/researchers/${researcher.id}`}
              target="_blank"
            />
            <Card.Header>{nameLink(title, id)}</Card.Header>
            <Card.Meta style={{ marginTop: "10px", fontSize: "20px" }}>
              {`${capitalize(type)} - ${researcher.firstName} ${
                researcher.lastName
              }`}
            </Card.Meta>
            <Card.Description style={{ marginTop: "45px" }}>
              {description}
            </Card.Description>
            {auth.loggedIn &&
              (auth.researcherId === researcher.id ||
                auth.type === "admin") && (
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
                      onConfirm={deleteResearcher}
                      content={`Are you sure you want to delete the phenomenon: ${title}
                      Warning: If there are any ocurrence, these will be deleted too`}
                    />
                    <Button
                      as={Link}
                      basic
                      color="blue"
                      style={{ marginTop: "10px" }}
                      className="delete"
                      to={{ pathname: `/phenomenon/edit/${id} ` }}
                    >
                      Edit
                    </Button>
                  </div>
                </Card.Content>
              )}
          </Card.Content>
        </Card>
      )}
    </AuthContext.Consumer>
  );
}

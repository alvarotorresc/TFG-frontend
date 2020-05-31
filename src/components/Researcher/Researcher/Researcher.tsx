import React, { useState } from "react";
import { Card, Icon, Button, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./researcher.css";
import { CardProps } from "../utils/props/researcher.props";
import { AuthContext } from "../../../context/auth/AuthContext";

function nameLink(name: string, id: number) {
  return (
    <div>
      <Link to={{ pathname: `/researchers/${id} ` }} id="linkName">
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
  phenomena,
  handleDelete,
}: CardProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  function deleteResearcher() {
    handleDelete(id);
    setOpen(false);
  }

  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Card
          image={image}
          header={nameLink(name, id)}
          meta={`${rol} - ${phenomena.length} phenomena ☢️`}
          description={`This researcher is ${age} and is ${nationality} `}
          key={id}
          id="cardId"
          extra={
            <div>
              <Icon name="mail" />
              {email}
              {auth.loggedIn && auth.type === "admin" && (
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
                    content={`Are you sure you want to delete the researcher: ${name}`}
                  />
                  <Button
                    as={Link}
                    basic
                    color="blue"
                    style={{ marginTop: "10px" }}
                    className="delete"
                    to={{ pathname: `/researcher/edit/${id} ` }}
                  >
                    Edit
                  </Button>
                </div>
              )}
            </div>
          }
          centered
        />
      )}
    </AuthContext.Consumer>
  );
}

import React from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth, AuthContext } from "../../../context/auth/AuthContext";

function FixedMenuLayout() {
  const { logout } = useAuth();
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Menu
          inverted
          borderless
          fluid
          style={{ height: "20%", maxHeight: "20%" }}
        >
          <Link to="/">
            <Menu.Item name="Home">
              <img src="/logo192.png" alt="logo" />
            </Menu.Item>
          </Link>

          <Menu.Item as={Link} to="/researchers">
            Researchers
          </Menu.Item>

          <Menu.Item as={Link} to="/posts">
            Posts
          </Menu.Item>

          <Menu.Item as={Link} to="/phenomena">
            Phenomena
          </Menu.Item>

          {auth.loggedIn && (
            <Menu.Menu position="right">
              <Menu.Item as={Button} onClick={logout}>
                <Icon name="sign-out" />
                &nbsp; Logout
              </Menu.Item>
            </Menu.Menu>
          )}

          {!auth.loggedIn && (
            <Menu.Menu position="right">
              <Menu.Item as={Link} to="/signin">
                <Icon name="sign-in" />
                &nbsp; Log-In
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
      )}
    </AuthContext.Consumer>
  );
}

export default FixedMenuLayout;

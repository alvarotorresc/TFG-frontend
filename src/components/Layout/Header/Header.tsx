import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function FixedMenuLayout() {
  return (
    <Menu inverted borderless fluid style={{ height: "20%", maxHeight: "20%" }}>
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

      <Menu.Menu position="right">
        <Menu.Item as={Button} onClick={() => localStorage.clear()}>
          Logout
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/signin">
          Log-In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default FixedMenuLayout;

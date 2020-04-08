import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function FixedMenuLayout() {
  const [active, setactive] = useState("home");

  return (
    <Menu inverted borderless fluid>
      <Link to="/">
        <Menu.Item name="Home" onClick={() => setactive("home")}>
          <img src="logo192.png" alt="logo" />
        </Menu.Item>
      </Link>

      <Menu.Item>
        <Link to="/researchers">
          <Menu.Item
            name="Researchers"
            active={active === "researchers"}
            onClick={() => setactive("researchers")}
          >
            Researchers
          </Menu.Item>
        </Link>
      </Menu.Item>

      <Menu.Item style={{ margin: "-29px" }}>
        <Link to="/posts">
          <Menu.Item
            name="Posts"
            active={active === "posts"}
            onClick={() => setactive("posts")}
          >
            Posts
          </Menu.Item>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/phenomena">
          <Menu.Item
            name="Phenomena"
            active={active === "phenomena"}
            onClick={() => setactive("phenomena")}
          >
            Phenomena
          </Menu.Item>
        </Link>
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Link to="/signin">
            <Button>Log-in</Button>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default FixedMenuLayout;

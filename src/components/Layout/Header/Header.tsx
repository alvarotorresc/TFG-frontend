import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function FixedMenuLayout() {
  const [active, setactive] = useState("home");

  return (
    <Menu inverted borderless fluid>
      <Link to="/ ">
        <Menu.Item
          name="Home"
          onClick={() => setactive("home")}
          style={{ padding: "30%" }}
        >
          <img src="logo192.png" alt="logo" />
        </Menu.Item>
      </Link>

      <Menu.Item active={active === "researchers"}>
        <Link to="/researchers" onClick={() => setactive("researchers")}>
          Researchers
        </Link>
      </Menu.Item>

      <Menu.Item active={active === "posts"}>
        <Link to="/posts" onClick={() => setactive("posts")}>
          Posts
        </Link>
      </Menu.Item>

      <Menu.Item active={active === "phenomena"}>
        <Link to="/phenomena" onClick={() => setactive("phenomena")}>
          Phenomena
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

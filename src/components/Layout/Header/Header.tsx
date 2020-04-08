import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";

function FixedMenuLayout() {
  const [active, setactive] = useState("home");

  return (
    <Menu inverted borderless fluid>
      <Menu.Item>
        <img src="logo192.png" alt="logo" />
      </Menu.Item>

      <Menu.Item
        name="Home"
        active={active === "home"}
        onClick={() => setactive("home")}
      >
        Home
      </Menu.Item>

      <Menu.Item
        name="Researchers"
        active={active === "testimonials"}
        onClick={() => setactive("testimonials")}
      >
        Researchers
      </Menu.Item>

      <Menu.Item
        name="Posts"
        active={active === "posts"}
        onClick={() => setactive("posts")}
      >
        Posts
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default FixedMenuLayout;

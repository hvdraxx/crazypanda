import React from "react";
import { Link } from "react-router-dom";
import { Button, Nav } from "./Header.styled";

export const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <Button>First Task</Button>
      </Link>
      <Link to="/second">
        <Button>Second Task</Button>
      </Link>
    </Nav>
  );
};

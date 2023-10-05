import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function Header() {
  //TODO: Convert anchor tags into react router links, add <route> and <routes> functionality
  //This component's purpose is to house the jsx responsible for displaying a header component on every page
  //The header will contain navigation links, and will be styled appropriately to show what page the user is currently on.
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Nav id="Top">
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/crudpage">Crud</Link>
            <Link to="/references">References</Link>
        </Nav>
      </Navbar>
    </>
  );
}

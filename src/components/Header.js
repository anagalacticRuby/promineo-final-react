import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export function Header() {
  //This component's purpose is to house the jsx responsible for displaying a header component on every page
  //The header will contain navigation NavLinks, and will be styled appropriately to show what page the user is currently on.
  return (
    <>
      <Navbar style={{ backgroundColor: "#0D503C" }}>
        <Nav id="Top">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "#0D503C" : "darkblue",
                fontWeight: isActive ? "bold" : "normal",
                padding: "8px",
                border: "solid 0.755px #1AA179",
                borderRadius: "0.375rem",
                backgroundColor: "#4DD4AC",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#0D503C" : "darkblue",
                fontWeight: isActive ? "bold" : "normal",
                padding: "8px",
                border: "solid 0.755px #1AA179",
                borderRadius: "0.375rem",
                backgroundColor: "#4DD4AC",
              };
            }}
            to="/games"
          >
            Games
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#0D503C" : "darkblue",
                fontWeight: isActive ? "bold" : "normal",
                padding: "8px",
                border: "solid 0.755px #1AA179",
                borderRadius: "0.375rem",
                backgroundColor: "#4DD4AC",
              };
            }}
            to="/crudpage"
          >
            Crud
          </NavLink>

          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#0D503C" : "darkblue",
                fontWeight: isActive ? "bold" : "normal",
                padding: "8px",
                border: "solid 0.755px #1AA179",
                borderRadius: "0.375rem",
                backgroundColor: "#4DD4AC",
              };
            }}
            to="/references"
          >
            References
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
}

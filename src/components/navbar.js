import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "gatsby";
import "./navbar.css";
const activeStyle = {
  borderBottom: "2px solid white",
  paddingBottom: "3px",
};
const CustomNavbar = ({ menuLinks }) => {
  return (
    <Navbar expand="lg" sticky="top" id={"navbar"} variant={"dark"}>
      <Navbar.Brand
        href="#home"
        className={"text-white"}
        style={{ fontSize: "1.8rem", textDecoration: "bold" }}
      >
        GandALF 2021
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              activeStyle={activeStyle}
              className={"text-white menu-item nav-link"}
            >
              {link.name}
            </Link>
          ))}
        </Nav>
        <span className="navbar-text text-white" id="navbar-subtitle">
          12th International Symposium on Games, Automata, Logics, and Formal
          Verification
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default CustomNavbar;

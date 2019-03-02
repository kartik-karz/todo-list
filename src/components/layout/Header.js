import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-light" style={navStyle}>
      <a
        style={{ backgroundColor: "black", fontSize: "20px", height: "75px" }}
        className="badge badge-secondary "
      >
        <p
          style={{ marginBottom: "8", textAlign: "center" }}
          className="badge badge-light"
        >
          Karz
        </p>
        <br style={{ paddingTop: "10px" }} />
        Todo List
      </a>

      <Link style={{}} to="/projects/">
        <a style={linkStyle} class="badge badge-success">
          Home
        </a>
      </Link>

      <Link style={{}} to="/projects/about">
        <a style={linkStyle} class="badge badge-info">
          About
        </a>
      </Link>
    </nav>
  );
}

const linkStyle = {
  fontSize: "18px",
  fontColor: "blue"
};
const navStyle = {
  backgroundColor: "#19303E",
  paddingBottom: "45px",
  marginBottom: "30px"
};

export default Header;

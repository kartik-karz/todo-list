import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/projects/">
        Home
        <h3 style={{ marginLeft: "10" }}> </h3>
      </Link>
      <Link style={linkStyle} to="/projects/about">
        About
      </Link>
    </div>
  );
}

const linkStyle = {
  //   color: "#fff",
  textDecoration: "none"
};
export default Header;

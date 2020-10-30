import React from "react";
import { NavLink } from "react-router-dom";
import "./menuVertical.scss";

const list = [
  { name: "all", path: "/all", exact: true },
  { name: "options", path: "/options" },
  { name: "events", path: "/events" },
  { name: "flow", path: "/flow" },
  { name: "schema", path: "/schema" },
];

const Navigation = () => {

  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="mainex">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";
import "./menuVertical.scss";

const list = [
  { name: "test", path: "/test1", exact: true },
  { name: "dynamic jsx", path: "/dynamicjsx" },
  { name: "layouts", path: "/layouts" },
  { name: "dashboard", path: "/dashboard" },
  { name: "register", path: "/register" },
  { name: "events", path: "/events" },
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

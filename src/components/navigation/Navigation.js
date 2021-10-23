import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationStyled } from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="NavList">
        <li className="NavListItem">
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            All currencies
          </NavLink>
        </li>

        <li className="NavListItem">
          <NavLink
            to="/mycurrencies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            My currencies
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;

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
        <li className="NavListItem">
          <NavLink
            to="/exchange"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Exchange
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;

// exchange page не должен быть в навигации
// открывается по клику на валюту в CurrencyList

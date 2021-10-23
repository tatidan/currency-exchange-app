import React from "react";
import { withRouter } from "react-router-dom";
import Section from "../Section";
import sprite from "../../icons/sprite.svg";
import { CurrencyListStyled } from "./CurrencyListStyled";

// const getIcon = (selected) => {
//   if (selected) {
//     return "#icon-star-full";
//   }
//   return "#icon-star-empty";
// };

const handleClick = (e) => {
  console.log(e.currentTarget);
  //если кликаем на него, он сохраняется в localStorage
  //звезда меняется - toggler
  //попадает в favourites
  //попадает на вторую страницу
};

const CurrencyList = ({ currencies }) => {
  return (
    <Section>
      <CurrencyListStyled>
        {currencies.map((currency) => (
          <li
            key={currency}
            className="Currency__ListItem"
            onClick={handleClick}
          >
            <option className="Currency__Name">{currency}</option>
            <svg width="15px" height="15px">
              <use
                className="Currency__Icon"
                href={sprite + "#icon-star-empty"}
              ></use>
            </svg>
          </li>
        ))}
      </CurrencyListStyled>
    </Section>
  );
};

export default withRouter(CurrencyList);

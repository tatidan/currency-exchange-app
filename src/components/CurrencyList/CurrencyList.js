import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { ThemeContext } from "../../App";
import sprite from "../../icons/sprite.svg";
import Section from "../Section";
import { CurrencyListStyled } from "./CurrencyListStyled";
import { connect } from "react-redux";
import { setActive } from "../../redux/currency-actions";

const getIcon = (isActive) => {
  if (isActive) {
    return "#icon-star-full";
  } else {
    return "#icon-star-empty";
  }
};

const CurrencyList = ({ currencies, link = false, setLink, setActive }) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = (e) => {
    const code = e.currentTarget.id;
    !link ? setActive(code) : setLink(code);
    // console.log(code);
  };

  return (
    <Section>
      <CurrencyListStyled id="#CurrencyListMain" colors={theme.colors}>
        {currencies.map((currency) => (
          <li
            key={currency.code}
            className="Currency__ListItem"
            onClick={handleClick}
            id={currency.code}
          >
            <span className="Currency__Name">{currency.description}</span>

            <svg width="15px" height="15px">
              <use
                className="Currency__Icon"
                href={sprite + getIcon(currency.isActive)}
              ></use>
            </svg>
          </li>
        ))}
      </CurrencyListStyled>
    </Section>
  );
};

export default connect(null, { setActive })(withRouter(CurrencyList));

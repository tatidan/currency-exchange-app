import React from "react";
import { withRouter } from "react-router-dom";
import Section from "../Section";
import sprite from "../../icons/sprite.svg";
import { CurrencyListStyled } from "./CurrencyListStyled";

// const getIcon = (isActive) => {
//   if (isActive === "true") {
//     return "#icon-star-full";
//   }
//   if (isActive === "false") {
//     return "#icon-star-empty";
//   }
// };

//добавить toggler для isActive

// document
//   .getElementById("#CurrencyList")
//   .addEventListener("click", function (e) {
//     console.log(e.currentTarget);
//     console.log(e);
//     // if (e.target && e.currentTarget == "LI") {
//     //   console.log(e.target.id + " was clicked");
//     // }
//   });

const handleClick = (e) => {
  const selectedCurrency = e.currentTarget;
  console.log(selectedCurrency);
  selectedCurrency.setAttribute("isActive", "true");
  console.log(selectedCurrency);
  selectedCurrency.classList.toggle("isActive");

  //если кликаем на него, он сохраняется в localStorage
  //звезда меняется - toggler
  //попадает в favourites
  //попадает на вторую страницу
};

const CurrencyList = ({ currencies }) => {
  // const [state, setstate] = useState(initialState);

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
              {/* <use
                  className="Currency__Icon"
                  href={sprite + getIcon(isActive)}
                ></use> */}
            </svg>
          </li>
        ))}
      </CurrencyListStyled>
    </Section>
  );
};

export default withRouter(CurrencyList);

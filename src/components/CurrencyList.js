import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { fetchCurrencies } from "../services/ApiService";
import Section from "./Section";
import sprite from "../icons/sprite.svg";

const getIcon = (selected) => {
  if (selected) {
    return "#icon-star-full";
  }
  return "#icon-star-empty";
};

// class CurrencyList extends Component {
//   state = {
//     currencies: [],
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.currencies === this.state.currencies) {
//       fetchCurrencies().then((response) => {
//         this.setState({ currencies: response.data.results });
//       });
//     }
//   }

const CurrencyList = ({ currencies, selected }) => {
  // render() {
  return (
    <Section>
      <h1>All currencies list</h1>

      <ul>
        {/* {currencies.map((currency) => (
            <li key={currency.base}>
              <p>{currency.base}</p>
              <svg>
            <use href={sprite + getIcon(selected)}></use>
          </svg>
            </li>
          ))} */}
      </ul>
    </Section>
  );
};
// }

export default withRouter(CurrencyList);

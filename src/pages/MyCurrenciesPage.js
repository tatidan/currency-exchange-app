import React from "react";
// import { Route } from "react-router";
// import CurrencyList from "../components/CurrencyList/CurrencyList";
import SearchForm from "../components/SearchForm/SearchForm";
// import ExchangePage from "./ExchangePage";

const MyCurrenciesPage = () => {
  //взять selectedCurrencies из LocalStorage

  return (
    <>
      <SearchForm title="My currencies" />
      {/* <CurrencyList currencies={selectedCurrencies} /> */}

      {/* <Route
        path={`${this.props.match.url}/exchange`}
        component={ExchangePage}
        exact={false}
      /> */}
    </>
  );
};

//по клику на валюту переходим в конвертер валют - ExchangePage

export default MyCurrenciesPage;

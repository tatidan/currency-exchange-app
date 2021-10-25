import React from "react";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import CurrencyList from "../components/CurrencyList/CurrencyList";

const MyCurrenciesPage = ({ selectedCurrencies, history }) => {
  const setExchange = (code) => {
    history.push(`/mycurrencies/${code}`);
  };

  return (
    <>
      <SearchForm title="My currencies" />

      <CurrencyList
        currencies={selectedCurrencies}
        setLink={setExchange}
        link={true}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedCurrencies: state.currencies.filter((currency) => currency.isActive),
});

export default connect(mapStateToProps)(MyCurrenciesPage);

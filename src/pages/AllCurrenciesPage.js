import React from "react";
import { Component } from "react";
import { fetchCurrencies } from "../services/ApiService";
import CurrencyList from "../components/CurrencyList/CurrencyList";
import SearchForm from "../components/SearchForm/SearchForm";

class AllCurrenciesPage extends Component {
  state = {
    currencies: [],
    codes: [],
  };

  async componentDidMount() {
    fetchCurrencies().then((result) => {
      const symbolsArr = Object.values(result.data.symbols);
      const currenciesCodes = symbolsArr.map((a) => a.code);
      const currenciesDescription = symbolsArr.map((a) => a.description);

      this.setState({
        currencies: currenciesDescription,
        codes: currenciesCodes,
      });
    });

    // fetchRates().then((response) => {
    //   return response;
    // });
  }
  // rates для exchange использовать

  render() {
    return (
      <>
        <SearchForm title="All currencies" />

        <CurrencyList currencies={this.state.currencies} />
      </>
    );
  }
}

export default AllCurrenciesPage;

import React from "react";
import { Component } from "react";
import { fetchCurrencies } from "../services/ApiService";
import CurrencyList from "../components/CurrencyList/CurrencyList";
import SearchForm from "../components/SearchForm/SearchForm";

class AllCurrenciesPage extends Component {
  state = {
    currencies: [],
  };

  async componentDidMount() {
    fetchCurrencies().then((response) => {
      // console.log(response.data.rates);
      const currencies = Object.keys(response.data.rates);
      // console.log(currencies);
      this.setState({ currencies: currencies });
      // console.log(this.state.currencies);

      // console.log(response.data.date);
      // console.log(response.data.rates);
    });
  }

  render() {
    return (
      <>
        <SearchForm />

        <CurrencyList currencies={this.state.currencies} />
      </>
    );
  }
}

export default AllCurrenciesPage;

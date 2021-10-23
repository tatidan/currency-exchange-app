import React from "react";
import { Component } from "react";
// import { fetchCurrencies } from "../services/ApiService";
// import CurrencyList from "../components/CurrencyList";
// import SearchForm from "../components/SearchForm";

class AllCurrenciesPage extends Component {
  state = {
    currencies: [],
  };

  // async componentDidMount() {
  //   fetchCurrencies().then((response) => {
  //     this.setState({ currencies: response.data.results });
  //   });
  // }

  render() {
    return (
      <>
        <p>Тут должен быть список</p>
        {/* <SearchForm />

        <CurrencyList currencies={this.state.currencies} /> */}
      </>
    );
  }
}

export default AllCurrenciesPage;

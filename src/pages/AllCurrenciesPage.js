import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import CurrencyList from "../components/CurrencyList/CurrencyList";
import { fetchCurrencies } from "../redux/currency-operations";
import { useSelector, useDispatch } from "react-redux";

const AllCurrenciesPage = () => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <SearchForm title="All currencies" />

      <CurrencyList currencies={currencies} />
    </>
  );
};

export default AllCurrenciesPage;

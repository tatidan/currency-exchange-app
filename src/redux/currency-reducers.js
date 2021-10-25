import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesError,
  fetchXchRateRequest,
  fetchXchRateSuccess,
  fetchXchRateError,
  onSearchFilter,
  setActive,
} from "./currency-actions";

const currencies = createReducer([], {
  [fetchCurrenciesSuccess]: (_, { payload }) => payload,
  [setActive]: (state, { payload }) => [
    ...state.map((currency) =>
      currency.code === payload
        ? { ...currency, isActive: !currency.isActive }
        : currency
    ),
  ],
});

const rates = createReducer([], {
  [fetchXchRateSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchCurrenciesRequest]: () => true,
  [fetchCurrenciesSuccess]: () => false,
  [fetchCurrenciesError]: () => false,
  [fetchXchRateRequest]: () => true,
  [fetchXchRateSuccess]: () => false,
  [fetchXchRateError]: () => false,
});

const filter = createReducer("", {
  [onSearchFilter]: (_, action) => action.payload,
});

const error = createReducer("", {
  [fetchCurrenciesRequest]: () => "",
  [fetchCurrenciesError]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  currencies,
  rates,
  filter,
  loading,
  error,
});

export default rootReducer;

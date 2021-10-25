import { createSelector } from "@reduxjs/toolkit";

export const getCurrencies = (state) => state.currencies;

export const getLoading = (state) => state.loading;

export const getFilter = (state) => state.filter;

export const onFilterRender = createSelector(
  [getCurrencies, getFilter],
  (currencies, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return currencies.filter(({ currency }) =>
      currency.toLowerCase().includes(normalizedFilter)
    );
  }
);

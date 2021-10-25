import { createAction } from "@reduxjs/toolkit";

export const fetchCurrenciesRequest = createAction("fetchCurrenciesRequest");
export const fetchCurrenciesSuccess = createAction("fetchCurrenciesSuccess");
export const fetchCurrenciesError = createAction("fetchCurrenciesError");

export const fetchXchRateRequest = createAction("fetchXchRateRequest");
export const fetchXchRateSuccess = createAction("fetchXchRateSuccess");
export const fetchXchRateError = createAction("fetchXchRateError");

export const onSearchFilter = createAction("searchFilter");

export const setActive = createAction("setCurrencyActive");

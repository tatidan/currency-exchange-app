import axios from "axios";
import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesError,
  fetchXchRateRequest,
  fetchXchRateSuccess,
  fetchXchRateError,
} from "./currency-actions";

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(fetchCurrenciesRequest());

  try {
    const { data } = await axios.get("https://api.exchangerate.host/symbols");
    const currencies = Object.keys(data.symbols).map((currency) => ({
      code: data.symbols[currency].code,
      description: data.symbols[currency].description,
      isActive: false,
    }));
    dispatch(fetchCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(fetchCurrenciesError(error.message));
  }
};

export const fetchRates = (code, amount) => async (dispatch) => {
  dispatch(fetchXchRateRequest());
  try {
    const response = await axios.get(
      `https://api.exchangerate.host/convert?from=${code}&to=EUR&amount=${amount}}`
    );
    dispatch(fetchXchRateSuccess(response.data.result));
  } catch (error) {
    dispatch(fetchXchRateError(error.message));
  }
};

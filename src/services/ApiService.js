import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = process.env.REACT_APP_BASE_URL;
const rates_URL = "https://api.exchangerate.host/latest";
const currencies_URL = "https://api.exchangerate.host/symbols";

export const fetchCurrencies = async () => {
  try {
    const result = await axios.get(currencies_URL);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRates = async () => {
  try {
    const response = await axios.get(rates_URL);
    // console.log(response);
    // console.log(response.data.base);
    // console.log(response.data.date);
    // console.log(response.data.rates);
    //для обмена валют

    return response.data.rates;
  } catch (error) {
    console.log(error);
  }
};

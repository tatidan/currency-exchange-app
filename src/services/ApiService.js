import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_URL = process.env.REACT_APP_BASE_URL;
const API_URL = "https://api.exchangerate.host/latest";

export const fetchCurrencies = async () => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response);
    // console.log(response.data.base);
    // console.log(response.data.date);
    // console.log(response.data.rates);
    //для обмена валют

    return response;
  } catch (error) {
    console.log(error);
  }
};

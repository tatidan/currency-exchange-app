import React, { Component } from "react";
import { fetchRates } from "../services/ApiService";

const exchange_URL =
  "https://api.exchangerate.host/convert?from=USD&to=EUR&amount=1200";

class ExchangePage extends Component {
  componentDidMount() {
    fetchRates().then((response) => {
      console.log(response);
      // return response;
      // видим все курсы валют от базового EUR
      // этот ход не подходит, нужно использовать exchange_URL
      // писать отдельный запрос
    });
  }

  render() {
    const styles = {
      wrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      },
      subdivision: {
        display: "flex",
        flexDirection: "raw",
      },
      label: {
        display: "flex",
        flexDirection: "column",
        marginRight: "20px",
      },
      input: {
        width: "300px",
        padding: "10px",
      },
    };
    return (
      <div style={styles.wrapper}>
        <h3>EUR</h3>

        <div style={styles.subdivision}>
          <label style={styles.label}>
            EUR
            <input style={styles.input} type="number" />
          </label>

          <label style={styles.label}>
            USD
            <input style={styles.input} type="number" />
          </label>
        </div>
      </div>
    );
  }
}
export default ExchangePage;

// вместо EUR выбранная(кликнутая) валюта, это base
// во второй инпут должна стать цифра *rate

// rate доступен как value, ключом которого является USD

// amount это input.value (отправка запроса по событию onSubmit)
// from EUR to USD это тоже динамические коды валют в линке

// делаем запрос, получаем результат, записываем его во второй инпут

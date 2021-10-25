import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRates } from "../redux/currency-operations";

const ExchangePage = ({ match }) => {
  const [value, setValue] = useState(100);
  const currency = useSelector((state) =>
    state.currencies.find((currency) => currency.code === match.params.code)
  );
  const rates = useSelector((state) => state.rates || 0);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchRates(match.params.code, value));
  }, [dispatch, value, match]);

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "25vw",
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
          {currency?.code}
          <input
            style={styles.input}
            type="number"
            value={value}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          EUR
          <input style={styles.input} type="text" value={rates} readOnly />
        </label>
      </div>
    </div>
  );
};

export default ExchangePage;

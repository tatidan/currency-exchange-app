import React, { createContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Suspense } from "react";
import Header from "./components/header/Header";
import ExchangePage from "./pages/ExchangePage";
import { mainRoutes } from "./routes/mainRoutes";
import { MainContainer } from "./components/main/MainContainer";
import { usePersistedTheme } from "./hooks/usePersistedTheme";
import { fetchCurrencies } from "./redux/currency-operations";
import "./index.css";

export const ThemeContext = createContext();

const App = () => {
  const [theme, changeTheme] = usePersistedTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Header colors={theme.colors} />
        <MainContainer colors={theme.colors}>
          <Switch>
            <Route path="/mycurrencies/:code" component={ExchangePage} exact />
            <Suspense fallback={<div>Loading...</div>}>
              {mainRoutes.map(({ path, exact, component }) => (
                <Route
                  path={path}
                  component={component}
                  exact={exact}
                  key={path}
                />
              ))}
            </Suspense>
          </Switch>
        </MainContainer>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

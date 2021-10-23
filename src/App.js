import React, { createContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "./routes/mainRoutes";
import "./index.css";
import Header from "./components/header/Header";
import { MainContainer } from "./components/main/MainContainer";
import { usePersistedTheme } from "./hooks/usePersistedTheme";

export const ThemeContext = createContext();

const App = () => {
  const [theme, changeTheme] = usePersistedTheme();

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Header colors={theme.colors} />
        <MainContainer colors={theme.colors}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {mainRoutes.map(({ path, exact, component }) => (
                <Route
                  path={path}
                  component={component}
                  exact={exact}
                  key={path}
                />
              ))}
            </Switch>
          </Suspense>
        </MainContainer>
      </ThemeContext.Provider>
    </>
  );
};

export default App;

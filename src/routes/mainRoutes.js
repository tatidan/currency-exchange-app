import { lazy } from "react";

export const mainRoutes = [
  {
    name: "allcurrencies",
    path: "/",
    exact: true,
    restricted: false,
    redirectTo: "/",
    component: lazy(() =>
      import(
        "../pages/AllCurrenciesPage" /* webpackChuckName: "AllCurrenciesPage"*/
      )
    ),
  },
  {
    name: "mycurrencies",
    path: "/mycurrencies",
    exact: true,
    restricted: false,
    redirectTo: "/mycurrencies",
    component: lazy(() =>
      import(
        "../pages/MyCurrenciesPage" /* webpackChuckName: "MyCurrenciesPage"*/
      )
    ),
  },
];

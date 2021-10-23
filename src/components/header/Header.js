import React, { useContext } from "react";
import AppBar from "./AppBar";
import { ThemeContext } from "../../App";
import { HeaderContainer } from "./HeaderContainer";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HeaderContainer colors={theme.colors}>
        <AppBar />
      </HeaderContainer>
    </>
  );
};

export default Header;

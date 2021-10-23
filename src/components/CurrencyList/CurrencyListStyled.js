import styled from "styled-components";

export const CurrencyListStyled = styled.ul`
  align-items: center;
  margin-left: 25vw;

  .Currency__ListItem {
    display: flex;
    width: 500px;
    height: 40px;
    border: 1px solid white;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
  /* .Currency__Name {
    margin-right: 30px;
  } */
  .Currency__Icon {
    fill: white;
  }
`;

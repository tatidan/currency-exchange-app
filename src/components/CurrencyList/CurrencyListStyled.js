import styled from "styled-components";

export const CurrencyListStyled = styled.ul`
  align-items: center;
  margin-left: 30vw;
  height: 80vh;
  overflow-y: scroll;

  .Currency__ListItem {
    display: flex;
    width: 500px;
    height: 40px;
    border: 1px solid ${(props) => props.colors.text};
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;
  }

  .Currency__Icon {
    fill: ${(props) => props.colors.text};
  }
`;

import styled from "styled-components";

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  margin-left: 30vw;
  margin-bottom: 20px;

  .SearchField {
    width: 300px;
    height: 30px;
    border-radius: 4px;
    padding-left: 20px;
    margin-left: 16px;
  }
  .Currency__Icon {
    fill: grey;
  }
  .Currency__IconBox {
    transform: translateX(-150%);
  }
`;

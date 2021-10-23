import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: ${(props) => props.colors.secondary};
  color: ${(props) => props.colors.text};
`;

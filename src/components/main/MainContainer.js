import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: ${(props) => props.colors.secondary};
  color: ${(props) => props.colors.text};
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
`;

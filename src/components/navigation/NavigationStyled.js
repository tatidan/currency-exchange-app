import styled from "styled-components";

export const NavigationStyled = styled.nav`
  .NavList {
    display: flex;
  }
  .NavListItem:not(:last-child) {
    margin-right: 25px;
  }
  .NavLink {
    color: #f5eeee;
    &--active {
      color: green;
    }
  }
`;

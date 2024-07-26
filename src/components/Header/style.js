import styled, { css } from "styled-components";

export const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop),
})`
  cursor: pointer;
  padding-left: 5px;
  padding-top: 5px;
  ${({ isVisible }) =>
    isVisible &&
    css`
      .menu {
        opacity: 0;
        transition: 2s;
      }
    `}
`;

import styled, { css } from 'styled-components'

export const Nav = styled.nav`
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
`

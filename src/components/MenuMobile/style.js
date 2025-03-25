import styled, { css } from 'styled-components'

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isVisible'].includes(prop)
})`
  cursor: pointer;
  margin-top: 1rem;
  opacity: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.5rem;
  transition-duration: 1s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      z-index: 2;
      transition: 2s;
      transform: translateY(-15px);
      position: absolute;
    `};

  ul {
    pointer-events: none;

    ${({ isVisible }) =>
      isVisible &&
      css`
        pointer-events: all;
      `}
  }
`

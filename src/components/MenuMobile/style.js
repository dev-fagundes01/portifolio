import styled, { css } from 'styled-components'

export const Container = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition-duration: 1s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      z-index: auto;
      transition: 2s;
      transform: translateY(-15px);
      position: absolute;
    `};
`

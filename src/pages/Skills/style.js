import styled from 'styled-components'

export const DivTS = styled.div`
  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  div::after {
    content: '';
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: girar 1s linear infinite;

    @media (min-width: 2180px) {
      display: block;
    }
  }
`

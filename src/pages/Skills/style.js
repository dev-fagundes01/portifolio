import styled from 'styled-components'

export const LiTS = styled.li`
  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.1);
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
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: girar 1s linear infinite;
  }

  @media screen and (min-width: 768px) {
    div {
      position: absolute;
      top: 0;
      left: 0;
      height: 3.5rem;
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div::after {
      content: '';
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid #000;
      border-color: #000 transparent #000 transparent;
      animation: girar 1s linear infinite;
    }
  }
`

import styled from 'styled-components'

export const Section = styled.section`
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 14rem;
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
  .overlay::after {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: girar 1s linear infinite;
  }
`

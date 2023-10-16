import styled from 'styled-components'

export const DivAnimention = styled.div`
  .big {
    transition: transform 5s; /* Define a duração da transição */
    transform: scale(2); /* Define o tamanho da imagem ampliada */
    filter: blur();
  }

  .small {
    transition: transform 3s; /* Define a duração da transição */
    transform: scale(0.5); /* Define o tamanho da imagem reduzida */
    filter: blur(15px);
  }
`

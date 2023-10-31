import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:none;
        text-decoration:none;
    }
`
export const ThemeGlobal = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
`

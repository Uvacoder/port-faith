import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  body {
    font-family:Sofia Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;;
    background-color: #f5f7fa;
    color: ${colors.font};
    text-rendering: optimizelegibility;
    overflow: hidden;
  }
`;

export default GlobalStyle;

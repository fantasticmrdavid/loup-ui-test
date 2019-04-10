/* eslint-disable */
import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: ${theme.fontBody};
    font-size: 14px;
    line-height: 1.2;
  }
`;

export default GlobalStyles;

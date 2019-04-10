import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colorBodyBackground};
  min-height: 100vh;
  background-color: ${theme.colorLightGrey};
`;

export const Content = styled.main`
  width: 100%;

  ${media.desktop`
    padding: 3em 0;
    max-width: 960px;
  `}
`;

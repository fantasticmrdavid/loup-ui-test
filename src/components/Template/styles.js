import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colorBodyBackground};
  min-height: 100vh;
  background-color: ${theme.colorLightGrey};
`;

export const Content = styled.main`
  margin-top: ${theme.navHeight};
  width: 100%;
  max-width: 960px;
  padding: 3em 0;
`;

import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colorBodyBackground};
  min-height: 100vh;
`;

export const Content = styled.main`
  margin-top: ${theme.navHeight};
  width: 100%;
  max-width: 900px;
  padding-bottom: 3em;
`;

import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colorWhite};
  min-height: 275px;
  width: 100%;
  box-shadow: ${theme.dropShadow};
`;

export const Image = styled.div`
  flex: 1;
  width: 100%;
  min-height: 200px;
  background-image: ${props => `url(${props.src})`};
  background-position: center center;
  background-size: cover;
`;

export const Title = styled.div`
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colorCharcoal};
`;

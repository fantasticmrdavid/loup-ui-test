import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  padding: 1em 2em;
  background-color: ${props => (props.active ? theme.colorGrey : theme.colorWhite)};
  color: ${props => (props.active ? theme.colorCharcoal : theme.colorGrey)};
  cursor: pointer;
  border-bottom: 1px solid ${theme.borderColor};

  &:last-of-type {
    border: none;
  };
`;

export const Name = styled.div`
`;

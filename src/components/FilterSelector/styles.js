import styled from 'styled-components';
import { fadeIn } from 'styles/animations';
import theme from 'styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  color: ${props => (props.active ? theme.colorCharcoal : theme.colorGrey)};
  cursor: pointer;
  border-bottom: 1px solid ${theme.borderColor};
  transition: 0.3s;

  &:last-of-type {
    border: none;
  };
`;

export const Icon = styled.div`
  animation: ${fadeIn} 0.3s normal linear;
  animation-fill-mode: forwards;
`;

export const Name = styled.div`
`;

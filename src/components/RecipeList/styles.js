import styled from 'styled-components';
import { media } from 'styles/utils';

export const Container = styled.div`
`;

export const List = styled.div`
  display: grid;
  width: 620px;
  grid-template-columns: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: space-between;

  ${media.tablet`
    grid-template-columns: 300px 300px;
    grid-column-gap: 20px;
  `}
`;

import styled from 'styled-components';
import theme from 'styles/theme';
import { media } from 'styles/utils';

export const Container = styled.div`
  ${media.desktop`
    display: grid;
    width: 100%;
    grid-template-columns: auto ${theme.sidebarWidth};
    grid-column-gap: 20px;
    justify-content: space-between;
  `}
`;

export const FilterBar = styled.aside`
  display: none;
  width: 100%;
  ${media.desktop`
    display: block;
    width: ${theme.sidebarWidth};
  `}
`;

export const MobileFilterBar = styled.div`
  ${media.desktop`
    display: none;
  `}
`;

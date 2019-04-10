import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'styles/global';
import * as styles from './styles';

const Template = ({ children }) => {
  const {
    Container,
    Content,
  } = styles;
  return (
    <Container>
      <GlobalStyles />
      <Content>
        {children}
      </Content>
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;

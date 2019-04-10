import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const FilterSelector = (props) => {
  const {
    active,
    add,
    name,
    remove,
  } = props;

  const {
    Container,
    Name,
  } = styles;

  return (
    <Container active={active} onClick={() => (active ? remove() : add())}>
      <Name>{name}</Name>
    </Container>
  );
};

FilterSelector.propTypes = {
  active: PropTypes.bool,
  add: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default FilterSelector;

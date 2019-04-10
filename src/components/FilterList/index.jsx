import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterSelectorContainer from 'containers/FilterSelectorContainer';
import * as styles from './styles';

class FilterList extends Component {
  constructor(props) {
    super(props);

    const { shouldFetchAll, fetchAllFilters } = props;
    if (shouldFetchAll) fetchAllFilters();
  }

  render() {
    const { activeCount, listing } = this.props;
    const {
      Container,
      Heading,
      List,
    } = styles;
    return (
      <Container>
        <Heading>{activeCount > 0 ? `${activeCount} selected` : 'Filter selection'}</Heading>
        <List>
          { listing.map(f => <FilterSelectorContainer key={`filter_${f.id}`} {...f} />) }
        </List>
      </Container>
    );
  }
}

FilterList.propTypes = {
  activeCount: PropTypes.number.isRequired,
  shouldFetchAll: PropTypes.bool,
  fetchAllFilters: PropTypes.func.isRequired,
  listing: PropTypes.array.isRequired,
};

export default FilterList;

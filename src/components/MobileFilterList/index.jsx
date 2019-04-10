import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'components/Collapsible';
import FilterSelectorContainer from 'containers/FilterSelectorContainer';
import * as styles from './styles';

class MobileFilterList extends Component {
  constructor(props) {
    super(props);

    const { shouldFetchAll, fetchAllFilters } = props;
    if (shouldFetchAll) fetchAllFilters();

    this.state = {
      active: false,
    };
  }

  toggleActive(e) {
    e.stopPropagation();
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { listing } = this.props;
    const { active } = this.state;
    const {
      Container,
      Heading,
      List,
    } = styles;
    return (
      <Container>
        <Heading onClick={e => this.toggleActive(e)}>I selected</Heading>
        <Collapsible active={active}>
          <List>
            { listing.map(f => <FilterSelectorContainer key={`filter_${f.id}`} {...f} />) }
          </List>
        </Collapsible>
      </Container>
    );
  }
}

MobileFilterList.propTypes = {
  shouldFetchAll: PropTypes.bool,
  fetchAllFilters: PropTypes.func.isRequired,
  listing: PropTypes.array.isRequired,
};

export default MobileFilterList;

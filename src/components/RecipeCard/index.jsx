import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const RecipeCard = (props) => {
  const {
    imageList,
    title,
    urlPartial,
  } = props;
  const {
    Container,
    Image,
    Title,
  } = styles;

  const { landscape32small2x } = imageList;

  return (
    <Container>
      <Link to={`/recipes/${urlPartial}`}>
        <Image src={landscape32small2x.url} />
        <Title>{title}</Title>
      </Link>
    </Container>
  );
};

RecipeCard.propTypes = {
  imageList: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  urlPartial: PropTypes.string.isRequired,
};

export default RecipeCard;

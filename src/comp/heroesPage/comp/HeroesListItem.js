import React from 'react';
import PropTypes from 'prop-types';

const HeroesListItem = ({ hero }) => (
  <div className={ 'heroes-list__item'}>
    <img src={ hero.image.icon_url } alt={ hero.name } />
    <p>{ hero.name }</p>
  </div>
);

HeroesListItem.propTypes = {
  hero: PropTypes.object.isRequired
};

export default HeroesListItem;

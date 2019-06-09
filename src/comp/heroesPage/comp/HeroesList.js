import React from 'react';
import PropTypes from 'prop-types';
import HeroesListItem from './HeroesListItem';
import useResourceList from "./useResourceList";

const HeroesList = ({ onCharacterSelect }) => {
  const heroes = useResourceList('characters');

  return (
    <div className={ 'heroes-list' }>
      { heroes && heroes.map(hero => <HeroesListItem key={ hero.id } hero={ hero } onCharacterClick={ onCharacterSelect }/>) }
    </div>
  );
};

HeroesList.propTypes = {
  onCharacterSelect: PropTypes.func
};

HeroesList.defaultProps = {
  onCharacterSelect: () => null
};

export default HeroesList;

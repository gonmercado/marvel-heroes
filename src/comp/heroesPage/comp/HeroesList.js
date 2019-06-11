import React from 'react';
import PropTypes from 'prop-types';
import HeroesListItem from './HeroesListItem';
import {characters} from "../../../data";

const HeroesList = ({ onCharacterSelect, searchValue }) => {
  const heroes = characters.results;

  return (
    <div className={ 'heroes-list' }>
      { heroes && heroes.map(hero => <HeroesListItem key={ hero.id } hero={ hero } onCharacterClick={ onCharacterSelect }/>) }
    </div>
  );
};

HeroesList.propTypes = {
  searchValue: PropTypes.string,
  onCharacterSelect: PropTypes.func
};

HeroesList.defaultProps = {
  searchValue: '',
  onCharacterSelect: () => null
};

export default HeroesList;

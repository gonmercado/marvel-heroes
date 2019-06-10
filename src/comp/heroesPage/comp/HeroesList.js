import React from 'react';
import PropTypes from 'prop-types';
import HeroesListItem from './HeroesListItem';
import useResourceList from "./useResourceList";

const HeroesList = ({ onCharacterSelect, searchValue }) => {
  const heroes = useResourceList('characters', { field_list: ['id', 'name', 'image'] }, 'name', searchValue);

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

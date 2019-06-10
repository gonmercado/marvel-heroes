import React, { useState } from 'react';
import HeroesList from './HeroesList';
import HeroesDetail from './HeroDetail';
import HeroSearch from "./HeroSearch";

const Heroes = () => {
  const [ selectedCharacter, setSelectedCharacter ] = useState();
  const [ searchValue, setSearchValue ] = useState('');

  const handleCharacterSelect = characterId => setSelectedCharacter(characterId);

  const handleHeroSearch = searchValue => setSearchValue(searchValue);

  return (
    <div className={ 'heroes-container' }>
      <div>
        <HeroSearch onSearch={ handleHeroSearch }/>
        <HeroesList onCharacterSelect={ handleCharacterSelect } searchValue={ searchValue } />
      </div>
      <HeroesDetail selectedCharacterId={ selectedCharacter } />
    </div>
  );
};

export default Heroes;

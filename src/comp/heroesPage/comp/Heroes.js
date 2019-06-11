import React from 'react';
import HeroesList from './HeroesList';
import HeroesDetail from './HeroDetail';
import HeroSearch from "./HeroSearch";

const Heroes = () => {
  const handleCharacterSelect = characterId => console.log(characterId);

  const handleHeroSearch = searchValue => console.log(searchValue);

  return (
    <div className={ 'heroes-container' }>
      <div>
        <HeroSearch onSearch={ handleHeroSearch }/>
        <HeroesList onCharacterSelect={ handleCharacterSelect } searchValue={ '' } />
      </div>
      <HeroesDetail selectedCharacterId={ 1 } />
    </div>
  );
};

export default Heroes;

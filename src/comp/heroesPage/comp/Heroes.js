import React, { useState } from 'react';
import HeroesList from './HeroesList';
import HeroesDetail from './HeroDetail';

const Heroes = () => {
  const [ selectedCharacter, setSelectedCharacter ] = useState();

  const handleCharacterSelect = characterId => setSelectedCharacter(characterId);

  return (
    <div className={ 'heroes-container' }>
      <HeroesList onCharacterSelect={ handleCharacterSelect } />
      <HeroesDetail selectedCharacterId={ selectedCharacter } />
    </div>
  );
}

export default Heroes;

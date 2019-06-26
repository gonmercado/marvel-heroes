import React from 'react';
import HeroesList from './heroesList/HeroesList';
import HeroesDetail from './heroesDetail/HeroDetail';

const Heroes = () => (
  <div className={ 'heroes-container' }>
    <HeroesList />
    <HeroesDetail />
  </div>
);

export default Heroes;

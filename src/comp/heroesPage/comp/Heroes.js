import React from 'react';
import HeroesList from './HeroesList';
import HeroesDetail from './HeroDetail';

const Heroes = () => (
  <div className={ 'heroes-section' }>
    <HeroesList />
    <HeroesDetail />
  </div>
);

export default Heroes;

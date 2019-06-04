import React from 'react';
import HeroesListItem from './HeroesListItem';

const heroesListData = [{
  id: 0,
  imageSrc: 'https://via.placeholder.com/60',
  name : 'Iron Man'
}, {
  id: 0,
  imageSrc: 'https://via.placeholder.com/60',
  name : 'Thor'
}, {
  id: 0,
  imageSrc: 'https://via.placeholder.com/60',
  name : 'Spider-man'
}];

const HeroesList = () => (
  <div className={ 'heroes-list' }>
    { heroesListData.map(hero => <HeroesListItem hero={ hero }/>) }
  </div>
);

export default HeroesList;

import React, { useState, useEffect } from 'react';
import HeroesListItem from './HeroesListItem';
import getAxios from '../../../setupAxios';

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

const HeroesList = () => {
  const [ heroes, setHeroes ] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const heroesData = await getAxios().get('/characters/?api_key=261abfbdb6ff32cdcc99aca7893263ad145d1017&format=json');
        console.log(heroesData);
        return heroesData;
      }
      catch(error) {
        console.log(error);
        return [];
      }
    };

    setHeroes(fetchHeroes());
  }, []);

  return (
    <div className={ 'heroes-list' }>
      { heroes.map(hero => <HeroesListItem hero={ hero }/>) }
    </div>
  );
};

export default HeroesList;

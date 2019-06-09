import React, { useState, useEffect } from 'react';
import HeroesListItem from './HeroesListItem';
import getAxios from '../../../setupAxios';

const HeroesList = () => {
  const [ heroes, setHeroes ] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const heroesData = await getAxios().get('/list?resourceName=characters');
        setHeroes(heroesData.data.results);
      }
      catch(error) {
        console.log(error);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <div className={ 'heroes-list' }>
      { heroes.map(hero => <HeroesListItem key={ hero.id } hero={ hero }/>) }
    </div>
  );
};

export default HeroesList;

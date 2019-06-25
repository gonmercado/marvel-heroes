import React, { useState, useEffect } from 'react';
import HeroesListItem from './HeroesListItem';
import queryString from 'query-string';
import { getAxios } from '../../../setupAxios';

const HeroesList = () => {
  const [ heroes, setHeroes ] = useState([]);

  useEffect(() => {
    const queryParams = {
      resourceName: 'characters'
    };
    getAxios().get(`/list?${ queryString.stringify(queryParams, { arrayFormat: 'comma' }) }`).then(resp => {
      setHeroes(resp.data.results)
    })
  }, []);

  return (
    <div className={ 'heroes-list' }>
      { heroes.map(hero => <HeroesListItem key={ hero.id } hero={ hero }/>) }
    </div>
  );
}

export default HeroesList;

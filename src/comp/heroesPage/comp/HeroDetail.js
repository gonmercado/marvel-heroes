import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ComicSection from './ComicSection';
import useResourceDetail from "./useResourceDetail";
import HeroWiki from "./HeroWiki";

const HeroesDetail = ({ selectedCharacterId }) => {
  const hero = useResourceDetail('character', selectedCharacterId, { field_list: ['id', 'name', 'image', 'aliases'] });
  const [ activeSection, setActiveSection ] = useState('wiki');

  useEffect(() => {
    setActiveSection('wiki');
  }, [ selectedCharacterId ])

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'wiki':
        return <HeroWiki characterId={ selectedCharacterId }/>;
      case 'comics':
        return <ComicSection selectedCharacterId={ selectedCharacterId } />;
      default:
        return null;
    }
  };

  return (
    <>
      {
        hero && <div className={ 'hero-details' }>
          <div className={ 'hero-details__information' }>
            <h2>{ hero.name }</h2>
            {
              hero.aliases &&
              <ul>
                {escape(hero.aliases).split('%0A').map(alias => <li> {unescape(alias)}</li>)}
              </ul>
            }
            <div className={ 'hero-details__image'}>
              <img src={ hero.image.medium_url } alt={ hero.name } />
            </div>
          </div>
          <div className={ 'hero-details__sections-buttons' }>
            <div className={ 'hero-details__sections-buttons_active' } onClick={ () => setActiveSection('wiki') }>Wiki</div>
            <div onClick={ () => setActiveSection('comics') }>Comics</div>
            <div>Series</div>
            <div>Stories</div>
          </div>
          <div className={ 'hero-details__section-detail' }>
            { selectedCharacterId && renderActiveSection() }
          </div>
        </div>
      }
    </>
  );
};

HeroesDetail.propTypes = {
  selectedCharacterId: PropTypes.number
};

export default HeroesDetail;

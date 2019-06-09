import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ComicSection from './ComicSection';
import useResourceDetail from "./useResourceDetail";

const HeroesDetail = ({ selectedCharacterId }) => {
  const hero = useResourceDetail('character', selectedCharacterId);

  return (
    <>
      {
        hero && <div className={ 'hero-details' }>
          <div className={ 'hero-details__information' }>
            <h2>{ hero.name }</h2>
            <div className={ 'hero-details__image'}>
              <img src={ hero.image.medium_url } alt={ hero.name } />
            </div>
            <div className={ 'hero-details__description'}>
              <div dangerouslySetInnerHTML={{ __html: hero.description }} />
            </div>
          </div>
          <div className={ 'hero-details__sections-buttons' }>
            <div className={ 'hero-details__sections-buttons_active' }>Comics</div>
            <div>Series</div>
            <div>Stories</div>
          </div>
          <div className={ 'hero-details__section-detail' }>
            <ComicSection />
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

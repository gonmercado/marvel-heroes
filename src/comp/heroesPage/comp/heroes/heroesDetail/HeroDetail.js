import React from 'react';
import ComicSection from './ComicSection';

const HeroData = {
  imageSrc: 'https://via.placeholder.com/300',
  name: 'Iron man',
  description: 's dfasd fasd fasdf asdf asdfasdfasd fasdf as sa fs f'
};

const HeroesDetail = () => (
  <div className={ 'hero-details' }>
    <div className={ 'hero-details__information' }>
      <div>
        <h2>{ HeroData.name }</h2>
        <p>{ HeroData.description }</p>
      </div>
      <img src={ HeroData.imageSrc } />
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
);

export default HeroesDetail;

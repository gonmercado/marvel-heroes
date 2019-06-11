import React from 'react';
import PropTypes from 'prop-types';
import {wiki} from "../../../data";

const HeroWiki = ({ characterId }) => {
  const characterInfo = wiki.results;

  return (
    <div className={ 'hero-details__description'}>
    {
        characterInfo &&
        <div dangerouslySetInnerHTML={{ __html: characterInfo.description }} />
      }
    </div>
  )
};

HeroWiki.propTypes = {
  characterId: PropTypes.number.isRequired
};

export default HeroWiki;

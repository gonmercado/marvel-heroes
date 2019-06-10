import React from 'react';
import PropTypes from 'prop-types';
import useResourceDetail from "./useResourceDetail";

const HeroWiki = ({ characterId }) => {
  const characterInfo = useResourceDetail('character', characterId, { field_list: [ 'description' ]})

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

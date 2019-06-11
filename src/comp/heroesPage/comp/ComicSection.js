import React from 'react';
import PropTypes from 'prop-types';
import {comics} from "../../../data";

const ComicSection = ({ selectedCharacterId }) => {
  const characterInfo = comics.results;

  return (
    <div>
      {
        selectedCharacterId && characterInfo &&
        <div className={ 'comic-section' }>
          { characterInfo.issue_credits.map(comic => (
            <div className={ 'comic-section__comic-container'} key={ comic.id }>
              <img src={ 'https://via.placeholder.com/100x160' } alt={ comic.name } />
              <p>{ comic.name }</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

ComicSection.propTypes = {
  selectedCharacterId: PropTypes.number.isRequired
}

export default ComicSection;

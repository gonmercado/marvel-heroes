import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HeroSearch = ({ onSearch }) => {
  const [ searchValue, setSearchValue ] = useState('');

  const handleSearch = () => {
    onSearch(searchValue)
  };

  return (
    <div className={ 'hero-search '}>
      <input value={ searchValue } onChange={ ev => setSearchValue(ev.target.value) } />
      <button onClick={ handleSearch }>Search</button>
    </div>
  );
};

HeroSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default HeroSearch;

import React from 'react';
import PropTypes from 'prop-types';

class HeroSearch extends React.Component {
  state = {
    searchValue: ''
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchValue)
  };

  render() {
    return (
      <div className={ 'hero-search '}>
        <input value={ this.state.searchValue } onChange={ ev => this.setState({ searchValue: ev.target.value }) } />
        <button onClick={ this.handleSearch }>Search</button>
      </div>
    );
  }
}

HeroSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default HeroSearch;

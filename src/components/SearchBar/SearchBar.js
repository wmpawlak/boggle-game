import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

class SearchBar extends React.Component {
  state = {
    word: '',
  };

  onInputChange = event => {
    this.setState({ word: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.word);
  };

  render() {
    return (
      <div className="field-container">
        <form onSubmit={this.onFormSubmit}>
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Sprawdź słowo"
                onChange={this.onInputChange}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default SearchBar;

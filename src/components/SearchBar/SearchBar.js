import React from 'react';
import PropTypes from 'prop-types';

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
      <form className="search-form" onSubmit={this.onFormSubmit}>
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="sprawdź słowo"
            onChange={this.onInputChange}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default SearchBar;

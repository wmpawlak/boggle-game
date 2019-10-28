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
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Sprawdź słowo</label>
            <input type="text" onChange={this.onInputChange} />
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

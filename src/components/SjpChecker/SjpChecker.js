import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

class SjpChecker extends React.Component {
  state = { response: [] };

  onWordSubmit = word => {
    window.open(`https://sjp.pl/${word}`);
  };

  render() {
    return (
      <div className="ui field">
        <SearchBar onFormSubmit={this.onWordSubmit} />
      </div>
    );
  }
}

export default SjpChecker;

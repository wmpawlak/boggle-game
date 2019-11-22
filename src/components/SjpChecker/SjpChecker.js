import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

class SjpChecker extends React.Component {
  state = { response: [] };

  onWordSubmit = word => {
    window.open(`https://sjp.pl/${word}`);
  };

  render() {
    return <SearchBar onFormSubmit={this.onWordSubmit} />;
  }
}

export default SjpChecker;

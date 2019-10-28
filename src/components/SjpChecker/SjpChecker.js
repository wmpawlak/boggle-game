import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import sjp from '../../apis/sjp';

class SjpChecker extends React.Component {
  state = { response: [] };

  onWordSubmit = async word => {
    const response = await `https://sjp.pl/${word}`;
    this.setState({
      response: document.querySelector('p:nth-of-type(1)'),
    });
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

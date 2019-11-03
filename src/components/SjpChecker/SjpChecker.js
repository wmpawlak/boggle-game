import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import sjp from '../../apis/sjp';

const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

class SjpChecker extends React.Component {
  state = { response: [] };

  onWordSubmit = async word => {
    const response = await axios
      .get(`https://sjp.pl/${word}`)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const slowo = $('p')
          .first()
          .text();
        this.setState({ response: slowo });
      })
      .catch(console.error);
    console.log(this.state.response);
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

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://sjp.pl/';

axios
  .get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const word = $('p')
      .first()
      .text();

    console.log(word);
  })
  .catch(console.error);

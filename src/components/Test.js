const $ = window.$;

const Test = () => {
  $.get('https://sjp.pl/s%C5%82owo', function(response) {
    console.log(
      'Hey I found out ' +
        $(response)
          .find('p')
          .text()
    );
  });
};

export default Test;

async function sjp(word) {
  const sjpURL = 'https://sjp.pl/';
  const response = await fetch('https://sjp.pl/s%C5%82owo', {
    mode: 'no-cors',
  });
  console.log(response);
}

export default sjp;

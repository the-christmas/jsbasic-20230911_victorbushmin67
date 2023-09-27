function camelize(str) {
  cupitalize(str.split('-'));
  
  return cupitalize(str.split('-')).join('');
}


function cupitalize(word) {
  for (let i = 0; i < word.length; i++) {
    if (i > 0) {
      word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
  }
  
  return word;
}

function toggleText() {
  button = document.querySelector('.toggle-text-button');
  text = document.getElementById('text');

  function hideText() {
    text.hidden = true;

    button.removeEventListener('click', hideText);

    button.addEventListener('click', showText);
  };

  function showText()  {
    text.hidden = false;

    button.removeEventListener('click', showText);

    button.addEventListener('click', hideText);
  }
  
  button.addEventListener('click', hideText);
};

function highlight(table) {
  console.log(table);
  const teachersRows = Array.from(table.rows);
  
  for (let i = 1; i < teachersRows.length; i++) {
    if (teachersRows[i].querySelectorAll('td')[3].dataset.available == 'true') {
      teachersRows[i].classList.add('available');
    } else if (teachersRows[i].querySelectorAll('td')[3].dataset.available === undefined) {
      teachersRows[i].setAttribute('hidden', '');
    } else {
      teachersRows[i].classList.add('unavailable');
    }
  }
  
  for (let i = 1; i < teachersRows.length; i++) {
    if (teachersRows[i].querySelectorAll('td')[2].textContent == 'm') {
      teachersRows[i].classList.add('male');
    } else {
      teachersRows[i].classList.add('female');
    }
  }
  
  for (let i = 1; i < teachersRows.length; i++) {
    if (teachersRows[i].querySelectorAll('td')[1].textContent < 18) {
      teachersRows[i].style.textDecoration = 'line-through';
    }
  }
}
function makeDiagonalRed(table) {
  let tableRows = table.rows;
  let tableCells = Array.from(tableRows).map(item => item.cells).map(item => Array.from(item));

  for (let i = 0; i < tableCells.length; i++) {
    tableCells[i][i].style.backgroundColor = 'red';
  }
}

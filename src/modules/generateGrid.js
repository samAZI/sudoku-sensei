const grid = [
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];


const generate = () => grid.map((row, indexRow) => row.map((column, indexColumn) => {
        		// const squareInfo = getSquareInfo(indexRow, indexColumn)
  let isValid = false;
  let number;

  while (!isValid) {
    number = getRandomNumber(1, 9);
    isValid = isValidNumberForSquare(number, indexRow, indexColumn);
  }
    		console.log('is valid number ?', isValid, number);
  grid[indexColumn][indexRow] = number;
  return number;
}));

export { generate };

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const squareList = [
  [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }],
  [{ x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }],
  [{ x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 0, y: 8 }, { x: 1, y: 8 }, { x: 2, y: 8 }],
  [{ x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }],
  [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }, { x: 3, y: 5 }, { x: 4, y: 5 }, { x: 5, y: 5 }],
  [{ x: 3, y: 6 }, { x: 4, y: 6 }, { x: 5, y: 6 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 3, y: 8 }, { x: 4, y: 8 }, { x: 5, y: 8 }],
  [{ x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 6, y: 1 }, { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 6, y: 2 }, { x: 7, y: 2 }, { x: 8, y: 2 }],
  [{ x: 6, y: 3 }, { x: 7, y: 3 }, { x: 8, y: 3 }, { x: 6, y: 4 }, { x: 7, y: 4 }, { x: 8, y: 4 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 8, y: 5 }],
  [{ x: 6, y: 6 }, { x: 7, y: 6 }, { x: 8, y: 6 }, { x: 6, y: 7 }, { x: 7, y: 7 }, { x: 8, y: 7 }, { x: 6, y: 8 }, { x: 7, y: 8 }, { x: 8, y: 8 }],
];

function isValidNumberForSquare(number, x, y) {
  const squareInfo = getSquareInfo(x, y);

  for (let iterator = 0; iterator < squareInfo.length; iterator++) {
    const point = squareInfo[iterator];
    // console.log('point ', point, 'contains ', grid[point.y][point.x])
    console.log(grid[point.y][point.x], number);
    if (grid[point.y][point.x] === number) {
      return false;
    }
  }
  return true;
}

function getSquareInfo(x, y) {
  const squareArray = squareList.filter((square) => {
    let isIn = false;
    for (let i = 0; i < square.length; i++) {
      if (square[i].x === x && square[i].y === y) {
        isIn = true;
      }
    }
    return isIn;
  });
  return squareArray.pop();
}

function isValidNumberForRow() {

}

function isValidNumberForColumn() {

}

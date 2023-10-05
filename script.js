let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let scores = {
  'X': 0,
  'O': 0, 
  'draw' : 0,
};

function makeMove(cellIndex) {
  if (board[cellIndex] === '' && !checkWinner()) {
    board[cellIndex] = currentPlayer;
    document.getElementById('board').children[cellIndex].innerText = currentPlayer;
    if (checkWinner()) {
      alert(`Гравець ${currentPlayer} виграв!`);
      scores[currentPlayer]++;
      updateScores();
      resetBoard();
    } else if (board.every(cell => cell !== '')) {
      alert('Гра закінчилася нічиєю!');
      const ScoreDraw = document.getElementById("score-draw");
      scores['draw']++;
      ScoreDraw.textContent = scores['draw'];
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
};



function checkWinner() {
  const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                         [0, 3, 6], [1, 4, 7], [2, 5, 8],
                         [0, 4, 8], [2, 4, 6]];
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
  currentPlayer = 'X';
}

function updateScores() {
  const scoreX = document.getElementById('score-x');
  scoreX.textContent = scores['X'];

  const scoreO = document.getElementById('score-o');
  scoreO.textContent = scores['O'];
}
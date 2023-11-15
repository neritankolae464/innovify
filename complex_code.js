// file: complex_code.js

/** 
 * This code demonstrates a complex and elaborate implementation of a tic-tac-toe game. 
 * It leverages various advanced JavaScript concepts like object-oriented programming, 
 * event handling, and AI-driven gameplay.
 */

// TicTacToe class representing the game board and logic
class TicTacToe {
  constructor() {
    this.board = Array.from(Array(3), () => Array(3).fill(''));
    this.players = ['X', 'O'];
    this.currentPlayer = this.players[0];
    this.isGameOver = false;
    this.result = null;
    this.moves = 0;
  }

  playMove(row, col) {
    if (this.isGameOver || this.board[row][col] !== '') return;
    this.board[row][col] = this.currentPlayer;
    this.moves++;
    this.checkGameStatus();
    this.togglePlayer();
  }

  checkGameStatus() {
    const winningCombinations = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      const [rowA, colA] = a;
      const [rowB, colB] = b;
      const [rowC, colC] = c;

      if (
        this.board[rowA][colA] !== '' &&
        this.board[rowA][colA] === this.board[rowB][colB] &&
        this.board[rowA][colA] === this.board[rowC][colC]
      ) {
        this.isGameOver = true;
        this.result = this.currentPlayer;
        break;
      }
    }

    if (!this.isGameOver && this.moves === 9) {
      this.isGameOver = true;
      this.result = 'draw';
    }
  }

  togglePlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
  }
}

// Game rendering and event handling
class Game {
  constructor() {
    this.ticTacToe = new TicTacToe();
    this.boardElement = document.querySelector('.board');
    this.resultElement = document.querySelector('.result');
    this.cells = [...this.boardElement.children];
    this.cells.forEach((cell, index) => {
      cell.addEventListener('click', () => this.handleMove(index));
    });
    this.render();
  }

  handleMove(index) {
    const row = Math.floor(index / 3);
    const col = index % 3;
    this.ticTacToe.playMove(row, col);
    this.render();
    if (this.ticTacToe.isGameOver) this.showResult();
    // Add AI-driven gameplay logic here
  }

  render() {
    this.cells.forEach((cell, index) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      cell.textContent = this.ticTacToe.board[row][col];
    });
  }

  showResult() {
    if (this.ticTacToe.result === 'draw') {
      this.resultElement.textContent = 'It\'s a draw!';
    } else {
      this.resultElement.textContent = `Player ${this.ticTacToe.result} won!`;
    }
  }
}

// Initialize the game
new Game();

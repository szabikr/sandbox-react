import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './utils';

export default function Game() {

  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i) => {
    const localHistory = history.slice(0, stepNumber + 1);
    const current = localHistory[localHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isXNext ? 'X' : 'O';
    setHistory(localHistory.concat([{
      squares: squares,
    }]));
    setStepNumber(localHistory.length);
    setIsXNext(prev => !prev);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXNext(step % 2 === 0);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick= {(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

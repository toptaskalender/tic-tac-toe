import PLAYERS, { TPlayers } from '@constants/PLAYERS';

import createSquareMatrix from '@helpers/createSquareMatrix';

export function initializeBoard(boardSize: number) {
  return createSquareMatrix(boardSize);
}

export function getNextPlayer(nextPlayer: TPlayers) {
  return nextPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
}

export function calculateWinner({
  rowIndex,
  cellIndex,
  board,
}: {
  rowIndex: number;
  cellIndex: number;
  board: TPlayers[][];
}) {
  const cells = board.flat();
  const boardSize = board.length;

  const lines = _generateLines({ rowIndex, cellIndex, boardSize });
  const winner = checkWinner({ lines, cells });

  return winner;
}

export function checkWinner({
  lines,
  cells,
}: {
  lines: number[][];
  cells: TPlayers[];
}) {
  let winner = null;

  lines.forEach(line => {
    const [i, j, k] = line;

    if (cells[i] && cells[i] === cells[j] && cells[j] === cells[k]) {
      winner = cells[i];
    }
  });

  return winner;
}

function _generateLines({
  rowIndex,
  cellIndex,
  boardSize,
}: {
  rowIndex: number;
  cellIndex: number;
  boardSize: number;
}) {
  const baseIndex = rowIndex * boardSize + cellIndex;

  /**
   * All possible lines that includes the current cell
   */
  return [
    /* 0 */
    [baseIndex, baseIndex + 1, baseIndex + 2],
    [baseIndex, baseIndex + boardSize, baseIndex + boardSize * 2],
    [baseIndex, baseIndex + boardSize + 1, baseIndex + boardSize * 2 + 2],
    // /* 1 */
    [baseIndex - 1, baseIndex, baseIndex + 1],
    [baseIndex, baseIndex + boardSize, baseIndex + boardSize * 2],
    /* 2 */
    [baseIndex - 2, baseIndex - 1, baseIndex],
    [baseIndex, baseIndex + boardSize, baseIndex + boardSize * 2],
    [baseIndex, baseIndex + boardSize - 1, baseIndex + boardSize * 2 - 2],
    /* 3 */
    [baseIndex - boardSize, baseIndex, baseIndex + boardSize],
    [baseIndex, baseIndex + 1, baseIndex + 2],
    /* 4 */
    [baseIndex - boardSize, baseIndex, baseIndex + boardSize],
    [baseIndex - 1, baseIndex, baseIndex + 1],
    [baseIndex - boardSize - 1, baseIndex, baseIndex + boardSize + 1],
    [baseIndex - boardSize + 1, baseIndex, baseIndex + boardSize - 1],
    /* 5 */
    [baseIndex - boardSize, baseIndex, baseIndex + boardSize],
    [baseIndex - 2, baseIndex - 1, baseIndex],
    /* 6 */
    [baseIndex - boardSize * 2, baseIndex - boardSize, baseIndex],
    [baseIndex, baseIndex + 1, baseIndex + 2],
    [baseIndex, baseIndex - boardSize + 1, baseIndex - boardSize * 2 + 2],
    /* 7 */
    [baseIndex - 1, baseIndex, baseIndex + 1],
    [baseIndex, baseIndex - boardSize, baseIndex - boardSize * 2],
    /* 8 */
    [baseIndex - 2, baseIndex - 1, baseIndex],
    [baseIndex, baseIndex - boardSize, baseIndex - boardSize * 2],
    [baseIndex, baseIndex - boardSize - 1, baseIndex - boardSize * 2 - 2],
  ];
}

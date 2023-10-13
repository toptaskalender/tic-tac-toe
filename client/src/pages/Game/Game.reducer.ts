import GAME_ACTIONS, { TGameActions } from '@constants/GAME_ACTIONS';
import GAME_CONFIGS from '@constants/GAME_CONFIGS';
import GAME_STATUSES, { TGameStatuses } from '@constants/GAME_STATUSES';
import PLAYERS, { TPlayers } from '@constants/PLAYERS';

import {
  calculateWinner,
  getNextPlayer,
  initializeBoard,
} from './Game.helpers';

type TGameState = {
  status: TGameStatuses;
  player: TPlayers;
  board: TPlayers[][];
};

function gameReducer(
  state: TGameState,
  action: {
    type: TGameActions;
    payload?: Record<string, any>;
  },
) {
  switch (action.type) {
    case GAME_ACTIONS.change_board_size: {
      const { size } = action.payload!;

      const nextState = { ...state };

      nextState.board = initializeBoard(size);

      return nextState;
    }
    case GAME_ACTIONS.initialize: {
      const nextState = { ...state };

      nextState.status = GAME_STATUSES.running;

      return nextState;
    }
    case GAME_ACTIONS.reset: {
      const initialState = {
        status: GAME_STATUSES.uninitialized,
        player: PLAYERS.X,
        board: initializeBoard(GAME_CONFIGS.DEFAULT_BOARD_SIZE),
      };

      return initialState;
    }
    case GAME_ACTIONS.play: {
      const { rowIndex, cellIndex } = action.payload!;

      const nextBoard = [...state.board];
      const nextRow = [...nextBoard[rowIndex]];

      nextRow[cellIndex] = state.player;
      nextBoard[rowIndex] = nextRow;

      const nextState = {
        ...state,
        board: nextBoard,
      };

      const winner = calculateWinner({
        rowIndex,
        cellIndex,
        board: nextBoard,
      });

      if (winner) {
        nextState.status = GAME_STATUSES.won;
      } else {
        nextState.player = getNextPlayer(state.player);
      }

      return nextState;
    }
  }
}

export default gameReducer;

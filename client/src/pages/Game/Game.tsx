import React from 'react';

import GAME_ACTIONS from '@constants/GAME_ACTIONS';
import GAME_CONFIGS from '@constants/GAME_CONFIGS';
import GAME_STATUSES from '@constants/GAME_STATUSES';
import PLAYERS from '@constants/PLAYERS';

import GameBoard from '@components/GameBoard';
import GameInfo from '@components/GameInfo';
import GameSettingsDrawer from '@components/GameSettingsDrawer';
import Layout from '@components/Layout';

import dispatchToast from '@helpers/dispatchToast';

import sleep from '@utils/sleep';

import { initializeBoard } from './Game.helpers';
import gameReducer from './Game.reducer';

function Game() {
  const [game, dispatch] = React.useReducer(gameReducer, {
    status: GAME_STATUSES.uninitialized,
    player: PLAYERS.X,
    board: initializeBoard(GAME_CONFIGS.DEFAULT_BOARD_SIZE),
  });

  /**
   * ! - TODO -
   * ! No synchronization
   * ! Should not be in *EFFECT*
   */
  React.useEffect(() => {
    if (game.status === GAME_STATUSES.won) {
      endWonGame();
    }

    async function endWonGame() {
      dispatchToast({ type: 'win' });

      const start = performance.now();
      await sleep(GAME_CONFIGS.WON_SCREEN_DURATION_SECONDS);
      console.log('dif ', performance.now() - start);
      _resetGame();
    }
  }, [game.status, game.player]);

  /* HELPERS */
  function _resetGame() {
    dispatch({ type: GAME_ACTIONS.reset });
  }

  /* HANDLERS */
  function handleBoardSizeChange(size: number) {
    dispatch({ type: GAME_ACTIONS.change_board_size, payload: { size } });
  }

  function handleStartGameClick() {
    dispatch({ type: GAME_ACTIONS.initialize });
  }

  function handlePlay(rowIndex: number, cellIndex: number) {
    dispatch({ type: GAME_ACTIONS.play, payload: { rowIndex, cellIndex } });
  }
  function handleResetGameClick() {
    _resetGame();
  }

  return (
    <Layout>
      <GameSettingsDrawer
        configs={{ status: game.status, boardSize: game.board.length }}
        onChangeBoardSize={handleBoardSizeChange}
        onStartGameClick={handleStartGameClick}
      />
      <main className='flex flex-1 flex-col items-center justify-center p-4'>
        <div className='relative'>
          <GameInfo
            player={game.player}
            boardSize={game.board.length}
            onResetGameClick={handleResetGameClick}
          />
          <GameBoard
            board={game.board}
            status={game.status}
            onPlay={handlePlay}
          />
        </div>
      </main>
    </Layout>
  );
}

export default Game;

/* 

 layout
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 60,
      }}
      
      */

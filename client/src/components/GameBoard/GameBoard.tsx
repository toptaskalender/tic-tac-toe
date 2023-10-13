import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

import GAME_STATUSES, { TGameStatuses } from '@constants/GAME_STATUSES';
import type { TPlayers } from '@constants/PLAYERS';

type TProps = {
  board: TPlayers[][];
  status: TGameStatuses;
  onPlay: (rowIndex: number, cellIndex: number) => void;
};

function GameBoard({ board, status, onPlay }: TProps) {
  const gameWon = GAME_STATUSES.won === status;

  return (
    <motion.div
      className='relative'
      layout
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 60,
      }}
    >
      {board.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className='flex'
          >
            {row.map((cell, cellIndex) => {
              const hasValue = !!cell;

              return (
                <Button
                  key={cellIndex}
                  variant='flat'
                  radius='none'
                  size='sm'
                  className='-mr-[1px] -mt-[1px] h-12 w-12 min-w-0 border border-black/20 bg-blue-50 p-0'
                  disabled={hasValue || gameWon}
                  onClick={() => {
                    onPlay(rowIndex, cellIndex);
                  }}
                >
                  {cell}
                </Button>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}

export default GameBoard;

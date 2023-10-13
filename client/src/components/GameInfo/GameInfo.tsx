import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'react-feather';

import type { TPlayers } from '@constants/PLAYERS';

type TProps = {
  player: TPlayers;
  boardSize: number;
  onResetGameClick: () => void;
};

function GameInfo({ player, boardSize, onResetGameClick }: TProps) {
  return (
    <motion.div
      className='absolute -left-44 bottom-0 top-0 mb-auto mt-auto flex h-[210px] w-[152px] flex-col gap-2 rounded border border-blue-200 bg-blue-100 p-4'
      layout='position'
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 60,
      }}
    >
      <h4>Game Info</h4>
      <div className='flex h-full flex-col justify-between'>
        <dl className='flex flex-col'>
          <span className='flex items-center gap-1'>
            <dt className='font-medium'>Player:</dt>
            <dd>{player}</dd>
          </span>
          <span className='flex items-center gap-1'>
            <dt className='font-medium'>Board size:</dt>
            <dd>{`${boardSize}x${boardSize}`}</dd>
          </span>
        </dl>
        <div className='flex items-center'>
          <Button
            isIconOnly
            color='danger'
            radius='sm'
            className='h-6 w-6 min-w-0'
            aria-label='Refresh'
            onClick={onResetGameClick}
          >
            <RefreshCw size={16} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default GameInfo;

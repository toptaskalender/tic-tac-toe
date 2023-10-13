import clsx from 'clsx';

import GAME_STATUSES, { TGameStatuses } from '@constants/GAME_STATUSES';

import GameSettings from '@components/GameSettings';
import Overlay from '@components/ui/Overlay';

type TProps = {
  configs: { status: TGameStatuses; boardSize: number };
  onChangeBoardSize: (count: number) => void;
  onStartGameClick: () => void;
};

function GameSettingsDrawer({
  configs,
  onChangeBoardSize,
  onStartGameClick,
}: TProps) {
  const isGameUninitialized = configs.status === GAME_STATUSES.uninitialized;

  return (
    <div
      className={clsx(
        'w-96 translate-x-0 bg-white px-4 py-6 transition-transform',
        {
          'fixed bottom-0 top-0 translate-x-[-24rem]': !isGameUninitialized,
        },
      )}
    >
      <aside className='h-full'>
        <GameSettings
          boardSize={configs.boardSize}
          onChangeBoardSize={onChangeBoardSize}
          onStartGameClick={onStartGameClick}
        />
      </aside>
      {isGameUninitialized && <Overlay />}
    </div>
  );
}

export default GameSettingsDrawer;

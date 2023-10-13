import { Button } from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';
import { Info } from 'react-feather';

import { BOARD_SIZES } from '@constants/BOARD_SIZES';

type TProps = {
  boardSize: number;
  onChangeBoardSize: (count: number) => void;
  onStartGameClick: () => void;
};

function GameSettings({
  boardSize,
  onChangeBoardSize,
  onStartGameClick,
}: TProps) {
  function handleChange(value: number) {
    onChangeBoardSize(value);
  }

  return (
    <div className='flex h-full flex-col gap-4'>
      <div className='relative flex flex-col gap-2'>
        <h2 className='relative text-center font-semibold'>
          Game Settings
          <span className='absolute right-0 text-sm font-medium'>
            v{import.meta.env.VITE_REACT_APP_VERSION}
          </span>
        </h2>
        <p className='flex items-center gap-2 rounded border border-blue-100 bg-blue-50 p-2 leading-tight'>
          <Info
            className='text-blue-400'
            size={20}
          />
          To get started, please adjust your game settings.
        </p>
      </div>
      <div className='flex-1 rounded bg-gray-100 p-4'>
        <Select
          label='Select Board Size'
          disallowEmptySelection
          radius='sm'
          variant='flat'
          selectedKeys={[String(boardSize)]}
          onChange={event => {
            handleChange(+event.target.value);
          }}
        >
          {BOARD_SIZES.map(({ label, value }) => (
            <SelectItem
              key={value}
              value={value}
            >
              {label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Button
        color='primary'
        radius='sm'
        size='lg'
        onClick={onStartGameClick}
      >
        Start Game
      </Button>
    </div>
  );
}

export default GameSettings;

import { ToastOptions, toast } from 'react-toastify';

import GAME_CONFIGS from '@constants/GAME_CONFIGS';

type TParams = {
  type: 'win' | 'lose';
};

function dispatchToast({ type }: TParams) {
  /**
   * TODO:
   */
  const options: ToastOptions = {
    closeButton: false,
    icon: false,
    autoClose: (GAME_CONFIGS.WON_SCREEN_DURATION_SECONDS - 1) * 1000,
    pauseOnFocusLoss: false,
    className: 'p-0',
    bodyClassName: 'p-0',
  };

  const jsx = type && (
    <div className='p-4'>
      <h2 className='text-center font-semibold'>Congrats 🎉</h2>
      <div>
        <p>
          The <em>winner</em> is
        </p>
        <span className="font-['Nabla']">X</span>
        <p>The game will be reset in {2}..</p>
      </div>
    </div>
  );

  toast(jsx, options);
}

export default dispatchToast;

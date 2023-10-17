import { createPortal } from 'react-dom';

function Overlay() {
  return createPortal(
    <div className='fixed inset-0 left-96 bg-black/20 backdrop-blur-sm' />,
    document.getElementById('overlay-root')!,
  );
}

export default Overlay;

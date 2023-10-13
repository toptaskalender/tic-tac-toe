import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Slide, ToastContainer } from 'react-toastify';

import App from './App.tsx';
import './main.css';

const host = document.getElementById('root')!;
const root = ReactDOM.createRoot(host);

root.render(
  <React.StrictMode>
    <NextUIProvider className='h-full'>
      <App />
      <ToastContainer transition={Slide} />
    </NextUIProvider>
  </React.StrictMode>,
);

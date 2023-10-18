import { io } from 'socket.io-client';

import { BASE_SERVER_URL } from '@constants/CONFIGS';

export const socket = io(BASE_SERVER_URL);

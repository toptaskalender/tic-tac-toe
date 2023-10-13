const PLAYERS = {
  X: 'X',
  O: 'O',
} as const;

export type TPlayers = keyof typeof PLAYERS;

export default PLAYERS;

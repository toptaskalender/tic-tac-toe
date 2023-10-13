const GAME_STATUSES = {
  uninitialized: 'uninitialized',
  running: 'running',
  draw: 'draw',
  won: 'won',
} as const;

export type TGameStatuses = keyof typeof GAME_STATUSES;

export default GAME_STATUSES;

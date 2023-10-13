const GAME_ACTIONS = {
  initialize: 'initialize',
  play: 'play',
  change_board_size: 'change_board_size',
  reset: 'reset',
} as const;

export type TGameActions = keyof typeof GAME_ACTIONS;

export default GAME_ACTIONS;

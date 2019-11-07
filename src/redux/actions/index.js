import {
  DRAW_LETTERS,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  RUN_TIMER,
  UPDATE_SESSION_LENGTH,
} from './actionTypes';

export const drawLetters = () => ({
  type: DRAW_LETTERS,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const runTimer = () => ({
  type: RUN_TIMER,
});

export const updateSessionLength = value => ({
  type: UPDATE_SESSION_LENGTH,
  value,
});

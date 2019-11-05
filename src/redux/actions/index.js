import { DRAW_LETTERS, START_TIMER, STOP_TIMER } from './actionTypes';

export const drawLetters = () => ({
  type: DRAW_LETTERS,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

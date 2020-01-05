import {
  DRAW_LETTERS,
  START_TIMER,
  STOP_TIMER,
  RUN_TIMER,
  UPDATE_SESSION_LENGTH,
  TOGGLE_ALARM_SOUND,
  RULES_MODAL_SWITCH,
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

export const runTimer = () => ({
  type: RUN_TIMER,
});

export const updateSessionLength = value => ({
  type: UPDATE_SESSION_LENGTH,
  value,
});

export const toggleAlarmSound = () => ({
  type: TOGGLE_ALARM_SOUND,
});

export const modalSwitch = () => ({
  type: RULES_MODAL_SWITCH,
});

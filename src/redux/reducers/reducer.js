import { defaultState } from './index';
import {
  DRAW_LETTERS,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
  RUN_TIMER,
  UPDATE_SESSION_LENGTH,
} from '../actions/actionTypes';

export const reducer = (state = defaultState, action) => {
  if (action.type === DRAW_LETTERS) {
    const lettersBoard = [...state.lettersBoard];
    for (let i = 0; i < state.availableLetters.length; i++) {
      const drawnIndex = Math.floor(
        Math.random() * state.availableLetters[i].length
      );
      const letter = state.availableLetters[i][drawnIndex];
      lettersBoard[i] = letter;
    }
    lettersBoard.sort(() => Math.random() - 0.5);
    return { ...state, lettersBoard };
  }
  if (action.type === START_TIMER) {
    return {
      ...state,
      isTimerRunning: true,
      isTimerPaused: false,
    };
  }
  if (action.type === STOP_TIMER) {
    return {
      ...state,
      isTimerRunning: false,
      isTimerPaused: true,
    };
  }
  if (action.type === RESET_TIMER) {
    return {
      ...state,
      isTimerRunning: false,
      isTimerPaused: false,
      isBreakTime: false,
      clockTime: state.sessionLength !== '' ? state.sessionLength * 60 : 1500, // in seconds
      secondsElapsed: 0,
    };
  }
  if (action.type === RUN_TIMER) {
    return {
      ...state,
      secondsElapsed: state.secondsElapsed + 1,
    };
  }
  if (action.type === UPDATE_SESSION_LENGTH) {
    return {
      ...state,
      sessionLength: action.value !== '' ? parseInt(action.value, 10) : '',
      clockTime:
        !state.isTimerRunning && !state.isTimerPaused && action.value !== ''
          ? parseInt(action.value, 10) * 60
          : state.clockTime,
    };
  } else {
    return state;
  }
};

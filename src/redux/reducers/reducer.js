import { defaultState } from './index';
import { DRAW_LETTERS } from '../actions/actionTypes';

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
  } else {
    return state;
  }
};

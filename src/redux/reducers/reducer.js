import { defaultState } from './index';
import { DRAW_LETTERS } from '../actions/actionTypes';

export const reducer = (state = defaultState, action) => {
  if (action.type === DRAW_LETTERS) {
    const lettersBoard = [...state.lettersBoard];
    for (let i = 0; i < state.letters.length; i++) {
      const drawnIndex = Math.floor(Math.random() * state.letters[i].length);
      const letter = state.letters[i][drawnIndex];
      lettersBoard[i] = letter;
    }
    lettersBoard.sort(() => Math.random() - 0.5);
    console.table(lettersBoard);
    return { ...state, lettersBoard };
  } else {
    return state;
  }
};

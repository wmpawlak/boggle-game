export const lettersBoard = new Array(16).fill('A');

export const defaultState = {
  lettersBoard: Array.from(lettersBoard),
  availableLetters: [
    ['e', 'r', 'w', 't', 'a', 'ą'],
    ['o', 't', 'o', 't', 'w', 'a'],
    ['g', 'a', 'n', 'k', 'e', 'a'],
    ['b', 'j', 'o', 'a', 'b', 'o'],
    ['l', 'i', 'd', 'e', 'r', 'ś'],
    ['g', 'b', 'n', 'h', 'w', 'e'], //from 6 first arrays, first letter is double points bonus
    ['ę', 'ż', 'n', 'z', 'l', 'r'],
    ['i', 't', 'ł', 's', 'y', 'd'],
    ['o', 's', 'e', 'i', 's', 't'],
    ['y', 'ć', 'r', 'e', 'l', 't'],
    ['p', 'o', 'a', 'c', 's', 'h'],
    ['i', 'o', 'c', 'm', 't', 'u'],
    ['f', 'c', 'a', 'p', 's', 'k'],
    ['l', 'd', 'r', 'e', 'y', 'ź'],
    ['e', 's', 'u', 'e', 'i', 'k'],
    ['ł', 'n', 'u', 'i', 'h', 'm'],
  ],
  sessionLength: 3,
  clockTime: 180,
  secondsElapsed: 0,
  isTimerRunning: false,
  isTimerPaused: false,
  isBreakTime: false,
  isAlarmON: true,
  isAutoStartON: true,
  isRulesModalOn: false,
};

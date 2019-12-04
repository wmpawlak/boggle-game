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
  rulesText: `
Twoja ulubiona gra słowna teraz zawsze pod ręką!
Możesz grać sam, ale prawdziwa zabawa zaczyna się gdy zaprosisz znajomych.
Plansza składa się z 16 pól, na których znajdują się wylosowane litery.Poza grą potrzebujesz jedynie kartki i czegoś do pisania dla każdego z graczy.Zadaniem graczy jest znalezienie jak największej liczby słów w ciągu trzyminutowej rundy i zapisanie ich na kartkach.
Słowa można tworzyć zgodnie z następującymi zasadami:
Litery w słowie muszą tworzyć "łańcuch" czyli litery sąsiadujące ze sobą w słowie muszą sąsiadować ze sobą również na planszy(przylegać do siebie bokami lub rogami).Danego pola z literą nie można wykorzystać w stworzonym słowie więcej niż raz.Słowa muszą zawierać przynamniej trzy litery.
Gra rozpoczyna się po wylosowaniu liter.W ciągu rundy należy odnaleźć jak najwięcej słów.O upływającym czasie informuje zegar znajdujący się nad planszą, a o końcu rundy powiadomi alarm.
Po zakończeniu rundy gracze odczytują zapisane przez siebie słowa i przyznają punkty.Punkty można otrzymać za słowa, których nie ma żaden inny gracz oraz są dopuszczalne w grach według Słownika Języka Polskiego(co można sprawdzić w polu "sprawdź słowo").
Punkty przyznawane są zgodnie z następującą punktacją:
  - słowa 3- i 4- literowe: 1 punkt
  - słowa 5-literowe: 2 punkty
  - słowa 6-literowe: 3 punkty
  - słowa 7-literowe: 4 punkty
  - słowa 8- i więcej literowe: 11 punktów
Po podliczeniu punktów można wylosować litery do kolejnej rundy i kontynuować zabawę!
`
};

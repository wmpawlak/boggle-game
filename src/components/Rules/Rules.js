import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { modalSwitch } from '../../redux/actions';

const Rules = ({ modalSwitch, isRulesModalOn }) => {
  return isRulesModalOn ? (
    <div className="modal">
      <div className="container">
        <i className="close icon" onClick={modalSwitch} />
        <div className="rules-text">
          <p>Twoja ulubiona gra słowna teraz zawsze pod ręką!</p>
          <p>
            Możesz grać sam, ale prawdziwa zabawa zaczyna się gdy zaprosisz znajomych.
          </p>
          <p>
            Plansza składa się z 16 pól, na których znajdują się wylosowane
            litery. Poza grą potrzebujesz jedynie kartki i czegoś do pisania dla
            każdego z graczy. Zadaniem graczy jest znalezienie jak największej
            liczby słów w ciągu trzyminutowej rundy i zapisanie ich na kartkach.
          </p>
          <p>Słowa można tworzyć zgodnie z następującymi zasadami:</p>
          <p>
            Litery w słowie muszą tworzyć łańcuch, czyli litery sąsiadujące ze
            sobą w słowie muszą sąsiadować ze sobą również na planszy (przylegać
            do siebie bokami lub rogami). Danego pola z literą nie można
            wykorzystać w stworzonym słowie więcej niż raz. Słowa muszą zawierać
            przynajmniej trzy litery.
          </p>
          <p>
            Gra rozpoczyna się po wylosowaniu liter i kliknięciu przycisku
            "START". W ciągu rundy należy odnaleźć jak najwięcej słów. O
            upływającym czasie informuje zegar znajdujący się nad planszą, a o
            końcu rundy powiadomi alarm.
          </p>
          <p>
            Po zakończeniu rundy gracze odczytują zapisane przez siebie słowa i
            przyznają punkty. Punkty można otrzymać za słowa, których nie ma
            żaden inny gracz oraz są dopuszczalne w grach według Słownika Języka
            Polskiego(co można sprawdzić w polu "SPRAWDŹ SŁOWO").
          </p>
          <p>Punkty przyznawane są zgodnie z następującą punktacją:</p>
          <ul>
            <li>słowa 3- i 4- literowe: 1 punkt,</li>
            <li>słowa 5-literowe: 2 punkty,</li>
            <li>słowa 6-literowe: 3 punkty,</li>
            <li>słowa 7-literowe: 4 punkty,</li>
            <li>słowa 8- i więcej literowe: 11 punktów,</li>
          </ul>
          <p>
            Po podliczeniu punktów można wylosować litery do kolejnej rundy i kontynuować zabawę!
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

Rules.propTypes = {
  modalSwitch: PropTypes.func,
  isRulesModalOn: PropTypes.bool,
};

const mapDispatchToProps = { modalSwitch };
const mapStateToProps = state => ({
  isRulesModalOn: state.isRulesModalOn,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rules);

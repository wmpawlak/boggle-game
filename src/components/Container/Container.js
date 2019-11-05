import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import Button from '../Button/Button';
import SjpChecker from '../SjpChecker/SjpChecker';
import Timer from '../Timer/Timer';
import { drawLetters, startTimer, stopTimer } from '../../redux/actions';
import './Container.css';

const Container = ({ drawLetters, startTimer, stopTimer }) => {
  return (
    <div>
      <Timer />
      <Board />
      <div className="buttons-menu">
        <Button name={'losuj'} onClick={drawLetters} />
        <Button name={'czas start'} onClick={startTimer} />
        <Button name={'czas stop'} onClick={stopTimer} />
        <Button name={'zasady'} />
      </div>
      <SjpChecker />
    </div>
  );
};

Container.propTypes = {
  drawLetters: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
};

const mapDispatchToProps = { drawLetters, startTimer, stopTimer };

export default connect(
  null,
  mapDispatchToProps
)(Container);

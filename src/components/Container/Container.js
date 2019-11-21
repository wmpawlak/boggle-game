import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import Button from '../Button/Button';
import SjpChecker from '../SjpChecker/SjpChecker';
import { drawLetters } from '../../redux/actions';
import './Container.css';
import ClockContainer from '../ClockContainer/ClockContainer';

const Container = ({ drawLetters }) => {
  return (
    <div>
      <Board />
      <ClockContainer />
      <div className="buttons-menu">
        <Button name={'losuj'} onClick={drawLetters} />
        <Button name={'zasady'} />
      </div>
      <SjpChecker />
    </div>
  );
};

Container.propTypes = {
  drawLetters: PropTypes.func,
};

const mapDispatchToProps = { drawLetters };

export default connect(
  null,
  mapDispatchToProps
)(Container);

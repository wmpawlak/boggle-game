import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import Button from '../Button/Button';
import SjpChecker from '../SjpChecker/SjpChecker';
import ClockContainer from '../ClockComponent/ClockContainer/ClockContainer';
import Rules from '../Rules/Rules';
import { drawLetters, modalSwitch } from '../../redux/actions';


const Container = ({ drawLetters, modalSwitch }) => {
  return (
    <div className="container">
      <ClockContainer />
      <SjpChecker />
      <Board />
      <div className="buttons-menu">
        <Button name={'losuj'} onClick={drawLetters} />
        <Button name={'zasady'} onClick={modalSwitch} />
      </div>
      <Rules />
    </div>
  );
};

Container.propTypes = {
  drawLetters: PropTypes.func,
  modalSwitch: PropTypes.func,
};

const mapDispatchToProps = { drawLetters, modalSwitch };

export default connect(
  null,
  mapDispatchToProps
)(Container);

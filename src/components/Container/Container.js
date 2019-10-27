import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import Button from '../Button/Button';
import Field from '../Field/Field';
import { drawLetters } from '../../redux/actions';

const Container = ({ drawLetters }) => {
  return (
    <div>
      <Board />
      <div className="buttons">
        <Button name={'losuj'} onClick={drawLetters} />
        <Button name={'czas start'} />
        <Button name={'czas stop'} />
        <Button name={'zasady'} />
      </div>
      <Field />
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

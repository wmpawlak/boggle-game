import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Board from '../Board/Board';
import Button from '../Button/Button';
import { drawLetters } from '../../redux/actions';

const Container = ({ drawLetters }) => {
  return (
    <div>
      <Board />
      <Button name={'start'} onClick={drawLetters} />
    </div>
  );
};

Container.propTypes = {
  drawLetters: PropTypes.func
};

const mapDispatchToProps = { drawLetters };

export default connect(
  null,
  mapDispatchToProps
)(Container);

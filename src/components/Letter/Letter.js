import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Letter.css';

const Letter = ({ index, lettersBoard }) => {
  return (
    <div className="letter">
      <p>{lettersBoard[index]}</p>
    </div>
  );
};

Letter.propTypes = {
  index: PropTypes.number,
  lettersBoard: PropTypes.array,
};

const mapStateToProps = state => ({
  lettersBoard: state.lettersBoard,
});

export default connect(
  mapStateToProps,
  null
)(Letter);

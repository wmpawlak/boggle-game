import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Letter = ({ index, lettersBoard }) => {
  return <div className="letter">{lettersBoard[index]}</div>;
};

Letter.propTypes = {
  index: PropTypes.number,
  lettersBoard: PropTypes.array
};

const mapStateToProps = state => ({
  lettersBoard: state.lettersBoard
});

export default connect(
  mapStateToProps,
  null
)(Letter);

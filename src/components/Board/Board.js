import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Letter from '../Letter/Letter';

const Board = lettersBoard => {
  const renderLetter = i => {
    return <Letter index={i} />;
  };
  return (
    <div>
      {lettersBoard.map((s, i) => (
        <div
          style={{
            width: '75px',
            height: '75px',
            float: 'left'
          }}
          key={i}
        >
          {renderLetter(i)}
        </div>
      ))}
    </div>
  );
};

Board.propTypes = {
  lettersBoard: PropTypes.array
};

const mapStateToProps = state => ({
  lettersBoard: state.lettersBoard
});

export default connect(
  mapStateToProps,
  null
)(Board);

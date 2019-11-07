import React from 'react';
import { connect } from 'react-redux';

import './Timer.css';

const Timer = timer => {
  console.log(timer);
  return (
    <div className="timer">
      Timer Timer
      <div> Timer</div>
      <div>{timer.timer}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  timer: state.timer,
});

export default connect(
  mapStateToProps,
  null
)(Timer);

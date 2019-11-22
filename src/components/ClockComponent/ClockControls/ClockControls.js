import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const ClockControls = props => {
  const { isTimerRunning, onStart, onStop } = props;
  return (
    <div className="button-controls">
      {isTimerRunning ? (
        <Button name="stop" value="Pause" className="btn" onClick={onStop} />
      ) : (
        <Button name="start" value="Start" className="btn" onClick={onStart} />
      )}
    </div>
  );
};

ClockControls.propTypes = {
  isTimerRunning: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
};
export default ClockControls;

import React from 'react';
import PropTypes from 'prop-types';
import FormattedTime from '../FormattedTime/FormattedTime';

function Clock(props) {
  const { clockTime, secondsElapsed } = props;
  const time = clockTime - secondsElapsed;
  return (
    <div className="clock-time">
      <FormattedTime time={time} />
    </div>
  );
}

Clock.propTypes = {
  clockTime: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
};

export default Clock;

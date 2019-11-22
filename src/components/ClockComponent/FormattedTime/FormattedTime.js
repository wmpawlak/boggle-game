import React from 'react';
import PropTypes from 'prop-types';

function FormattedTime(props) {
  const { time } = props;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const clockTime = `${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return <div className="clock-numbers">{clockTime}</div>;
}
FormattedTime.propTypes = {
  time: PropTypes.number.isRequired,
};
export default FormattedTime;

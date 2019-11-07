import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormattedTime from '../Formatted Time/FormattedTime';

const Clock = (clockTime, secondsElapsed) => {
  const time = clockTime - secondsElapsed;
  return (
    <div className="clock-ring-one">
      <div className="clock-ring-two">
        <div className="clock-ring-three">
          <div className="clock-time">
            <FormattedTime time={time} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  clockTime: state.clockTime,
  secondsElapsed: state.secondsElapsed,
});

Clock.propTypes = {
  clockTime: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
};

export default connect(
  mapStateToProps,
  null
)(Clock);

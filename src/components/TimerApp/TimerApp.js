import React from 'react';
import PropTypes from 'prop-types';

import Clock from '../Clock/Clock';
import ClockControls from '../ClockControls/ClockControls';

class TimerApp extends React.Component {
  constructor(props) {
    super(props);
    this.alarmRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    if (currentProps.isTimerRunning && !prevProps.isTimerRunning) {
      this.timerID = setInterval(() => {
        currentProps.runTimer();
      }, 1000);
    }

    if (!currentProps.isTimerRunning && prevProps.isTimerRunning) {
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {
      clockTime,
      secondsElapsed,
      isTimerRunning,
      isTimerPaused,
    } = this.props;
    const { startTimer, stopTimer, resetTimer } = this.props;
    return (
      <div>
        <div>
          <Clock
            clockTime={clockTime}
            secondsElapsed={secondsElapsed}
            isTimerRunning={isTimerRunning}
            isTimerPaused={isTimerPaused}
          />
          <ClockControls
            isTimerRunning={isTimerRunning}
            onStart={startTimer}
            onStop={stopTimer}
            onReset={resetTimer}
          />
        </div>
      </div>
    );
  }
}
TimerApp.propTypes = {
  clockTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  secondsElapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  runTimer: PropTypes.func.isRequired,
};
export default TimerApp;

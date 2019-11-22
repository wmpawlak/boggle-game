import { connect } from 'react-redux';
import { startTimer, stopTimer, runTimer } from '../../../redux/actions';
import ClockApp from '../ClockApp/ClockApp';

const mapStateToProps = state => ({
  clockTime: state.clockTime,
  secondsElapsed: state.secondsElapsed,
  isTimerRunning: state.isTimerRunning,
  isTimerPaused: state.isTimerPaused,
  isBreakTime: state.isBreakTime,
});

const mapDispatchToProps = {
  startTimer,
  stopTimer,
  runTimer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClockApp);

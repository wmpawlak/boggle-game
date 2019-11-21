import { connect } from 'react-redux';
import {
  startTimer,
  stopTimer,
  resetTimer,
  runTimer,
} from '../../redux/actions';
import TimerApp from '../TimerApp/TimerApp';

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
  resetTimer,
  runTimer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerApp);

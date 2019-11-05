import React from 'react';
import { connect } from 'react-redux';

import './Timer.css';

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      counter: 5,
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }
  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  render() {
    return (
      <div className="timer">
        Timer Timer
        <div> Timer</div>
        <div>Loading{this.state.counter}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timerStart: state.currentTimerValue,
})

export default connect(
  mapStateToProps,
  null
)(Timer);

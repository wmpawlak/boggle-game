import React from 'react';
import { connect } from 'react-redux';

import './Timer.css';

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5,
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    console.log('dupa');
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }
  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    if (this.state.counter === 0) {
      console.log('interval cleaned');
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div className="timer">
        Timer Timer
        <div> Timer</div>
        <div>{this.state.counter}</div>
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

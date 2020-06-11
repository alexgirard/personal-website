import React from 'react';
import moment from "moment";

const curTime = () => moment().format("ddd LT");

class Clock extends React.Component {
  state = {
    date: curTime()
  }
  
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
    
  tick() {
    this.setState({date: curTime()});
  }
  
  render() {
    return this.state.date;
  }
}

export default Clock;
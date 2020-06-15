import React from 'react';
import moment from "moment";

const curTime = format => moment().format(format || "ddd LT");

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
    const { format } = this.props;
    this.setState({date: curTime(format)});
  }
  
  render() {
    return this.state.date;
  }
}

export default Clock;
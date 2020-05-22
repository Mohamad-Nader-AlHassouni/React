import React, { Component } from "react";
import Count from "./Count";
import Button from "./Button";

class Counter extends Component {
  state = {
    count: 0,
  };
  increaseCountHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  resetCountHandler = () => {
    this.setState({
      count: 0,
    });
  };
  render() {
    const feedback = this.state.count > 10 ? <p>it's higher than 10!</p> : <p>keep counting...</p>
    return (
      <div>
        <Count count={this.state.count} />
        {feedback}
        <Button clicked={this.increaseCountHandler} name='Add 1!' />
        <Button clicked={this.resetCountHandler} name='Reset!' />
      </div>
    );
  }
}

export default Counter;

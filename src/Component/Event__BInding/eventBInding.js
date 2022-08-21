import React, { Component } from "react";

export default class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coutn: 0,
    };
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }
  handleClickIncrement() {
    this.setState({
      coutn: this.state.coutn + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Coutn: {this.state.coutn} </h1>
        <button onClick={this.handleClickIncrement}>Increment</button>

        {/* you can also use this method */}
        {/* <button onClick={this.handleClickIncrement.bind(this)}>Increment</button> */}
      </div>
    );
  }
}

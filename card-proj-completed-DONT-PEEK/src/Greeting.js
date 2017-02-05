import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return (
      <div className="greeting">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}
export default Greeting;

import React, { Component } from 'react';
import Greeting from './Greeting';
import From from './From';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Greeting message={this.props.greeting} />
        <From onFromMouseEnter={this.props.onFromMouseEnter} person={this.props.from} />
      </div>
    );
  }
}

export default Card;

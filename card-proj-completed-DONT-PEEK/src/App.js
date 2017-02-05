import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      greetingText: 'Hello there',
      fromText: 'Loren Stewart'
    }
    this.handleFromMouseEnter = this.handleFromMouseEnter.bind(this);
  }
  handleFromMouseEnter() {
    if( !this.state.fromText.includes('President') ) {
      const newFrom = `President ${this.state.fromText}`;
      this.setState({
        fromText: newFrom
      });
    }
  }
  render() {
    return (
      <div>
        <Card
          onFromMouseEnter={this.handleFromMouseEnter}
          greeting={this.state.greetingText}
          from={this.state.fromText} />
      </div>
    );
  }
}

export default App;

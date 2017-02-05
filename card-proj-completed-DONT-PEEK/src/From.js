import React, { Component } from 'react';

class From extends Component {
  render() {
    return (
      <div className="from">
        <h2
          onMouseEnter={this.props.onFromMouseEnter}>
          ~{this.props.person}
        </h2>
      </div>
    );
  }
}
export default From;

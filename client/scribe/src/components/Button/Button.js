import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <div className="button">
        <a href={this.props.link}>{this.props.buttonText}</a>
      </div>
    );
  }
}

export default Button;

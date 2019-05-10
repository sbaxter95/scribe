import React, { Component } from 'react';
import './LandingPageContent.css';

import Button from '../Button/Button';

class LandingPageContent extends Component {
  render() {
    return (
      <div className="content">
        <h1>scribe.</h1>
        <h2>writing. but not as you know it.</h2>
        <Button buttonText="Start" />
      </div>
    );
  }
}

export default LandingPageContent;

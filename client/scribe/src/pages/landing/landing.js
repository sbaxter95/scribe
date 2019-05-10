import React, { Component } from 'react';

import LandingPageContent from '../../components/LandingPageContent/LandingPageContent';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <LandingPageContent />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;

import React, { Component } from 'react';

import IconSection from '../components/IconSection';
import LandingParallax from '../components/LandingParallax';
import InfoSection from '../components/InfoSection';
import MemberSection from '../components/landing_section/MemberSection';
import Test from '../components/templates/LandingSection';
import Header from '../components/landing_section/Header';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <IconSection />
        <LandingParallax />
        <InfoSection />
        <MemberSection />
        <Test />
      </div>
    );
  }
}

export default LandingPage;

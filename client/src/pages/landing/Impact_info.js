import React from 'react';
import { NavLink } from 'react-router-dom';
import { View, Mask, Button } from 'mdbreact';
const img2 = 'https://i.imgur.com/kC8zbBM.jpg';
const styles = {
  bgImage: {
    backgroundImage: `url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%'
  }
};
export default () => {
  return (
    <section style={{ height: 42 + 'em' }}>
      <View style={styles.bgImage} className="hm-black-light">
        <Mask className="dark-overlay flex-column flex-center">
          <div className="w-75 text-center text-justify-center text-md-center">
            <h1 className="h1-responsive font-weight-bold text-white mb-3">
              Impact Investing
            </h1>
            <p className="mb-3 h3-responsive white-text">
              Impact investing enables investors to put their money to good use
              in meaningful, intelligent ventures that provide both a financial
              AND a social return on their investment.
            </p>
            <NavLink
              className="btn btn-primary"
              to="/resources/impactinvesting"
            >
              Learn More
            </NavLink>
          </div>
          <div className="w-75 mt-4 text-center text-justify-center text-md-center white-text">
            <h1 className="h1-responsive font-weight-bold text-white mb-3">
              Did you know...
            </h1>

            <p className="mb-3 h3-responsive white-text">
              You can invest with your 401k/IRA?
            </p>

            <NavLink
              className="btn btn-primary"
              to="/info/investing/ira401k"
              size="md"
            >
              Find Out More
            </NavLink>
          </div>
        </Mask>
      </View>
    </section>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Footer, Container } from 'mdbreact';
const style = {
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '60px',
    color: 'white'
  }
};
const NavFooter = () => {
  return (
    <footer style={style.footerStyle} className="primary-color-dark w-100">
      <div className="row flex-center">
        <div className="col-12 d-flex flex-center">
          <p className="white-text">
            © 2018 Limitless Estates, LLC |{' '}
            <NavLink className="white-text" to="/legal">
              Disclaimer
            </NavLink>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default NavFooter;

import '../style/styles.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
/* Pages */
import LandingPage from '../pages/LandingPage';
import Markets from '../pages/Markets';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Columbus from '../pages/markets/Columbus';
import Ecorse from '../pages/markets/Ecorse';
import Resources from '../pages/Resources';

const Construction = () => {
  return (
    <div style={{ height: '100vh' }} className="container-fluid bg-dark">
      <h2 style={{ padding: '100px' }} className="text-center text-white">
        Under Construction, Coming Soon!
      </h2>
    </div>
  );
};

const ContactContruction = () => {
  return (
    <div style={{ height: '100vh' }} className="container-fluid bg-dark">
      <h2 style={{ padding: '80px' }} className="text-center text-white">
        Under Construction, Coming Soon!
      </h2>
      <div style={{ color: '#eee' }}>
        <h2 style={{ fontSize: '30px' }} className="lead text-center">
          For business inquiries please contact{' '}
          <a className="text-white" href="mailto:kmitchell@limitless-estates.com">
            Kyle Mitchell
          </a>{' '}
          at
        </h2>
        <h2 style={{ fontSize: '30px' }} className="lead text-center">
          <a href="mailto:kmitchell@limitless-estates.com">kmitchell@limitless-estates.com</a>
        </h2>
        <h2 style={{ fontSize: '30px' }} className="lead text-center">
          Thank you!
        </h2>
      </div>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <ScrollToTop>
              <Navbar />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={ContactContruction} />
              <Route exact path="/resources" component={Construction} />
              <Route exact path="/markets" component={Markets} />
              <Route path="/markets/riverparkjefferson" component={Ecorse} />
              <Route path="/markets/arlingtonheights" component={Columbus} />
              <Route exact path="/" component={LandingPage} />
              <Footer />
            </ScrollToTop>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

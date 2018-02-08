import React, { Component } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Resources from "./Resources";
import FAQ from "./FAQ";
import Contact from "./Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/resources" component={Resources}/>
            <Route path="/services" component={Services}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

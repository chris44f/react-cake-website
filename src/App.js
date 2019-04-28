import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import AboutUs from './pages/aboutus/';
import Cakes from './pages/cakespage/';
import Contact from './pages/contact/';
import Home from './pages/home/';
import Navigation from './components/navigation'
import Footer from './components/footer'

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/cakes" component={Cakes} />
          <Route path="/aboutus" component={AboutUs} />
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App

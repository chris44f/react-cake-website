import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from '../../assets/log.jpg'

class Navigation extends Component {
  render(){
    return(
      <div className="navigation">
        <img src={Logo} id="navlogo" />
        <ul className="nav-bar">
          <li className="nav-bar_link">
            <Link className="nav-bar_link" to ='/'>Home</Link>
          </li>
          <li className="nav-bar_link">
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li id="cakes" className="nav-bar_link">
            <Link to='/cakes'>Cakes</Link>
            <ul className="dropdown-cakes">
              <li><a>Buttercream Cakes</a></li>
              <li><a>Le Croquembouche</a></li>
              <li><a>Tea Party Towers</a></li>
              <li><a>Macaron Towers</a></li>
            </ul>
          </li>
          <li className="nav-bar_link">
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation

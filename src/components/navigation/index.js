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
          <li>
            <Link to ='/' className="nav-bar_link">Home</Link>
          </li>
          <li>
            <Link to='/aboutus' className="nav-bar_link">About Us</Link>
          </li>
          <li id="cakes">
            <Link to='/cakes' className="nav-bar_link">Cakes</Link>
            <ul className="dropdown-cakes">
              <li><a>Buttercream Cakes</a></li>
              <li><a>Le Croquembouche</a></li>
              <li><a>Tea Party Towers</a></li>
              <li><a>Macaron Towers</a></li>
            </ul>
          </li>
          <li>
            <Link to='/contact' className="nav-bar_link">Contact</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation

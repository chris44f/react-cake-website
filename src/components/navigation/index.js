import React, { Component } from 'react';
import './index.css';
import Logo from '../../assets/log.jpg'

class Navigation extends Component {
  render(){
    return(
      <div className="navigation">
        <img src={Logo} id="navlogo" />
        <ul className="navBar">
          <li>Home</li>
          <li>About Us</li>
          <li id="cakes">Cakes
            <ul className="dropdowncakes">
              <li><a>Buttercream Cakes</a></li>
              <li><a>Le Croquembouche</a></li>
              <li><a>Tea Party Towers</a></li>
              <li><a>Macaron Towers</a></li>
            </ul>
          </li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navigation

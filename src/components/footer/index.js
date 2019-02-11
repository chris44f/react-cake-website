import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render(){
    return(
      <div className="footer">
        <div className="footer_information">
          Spectacular wedding cakes for the Lake District, Cumbria, and the North-West
          <br />
          <br />
          email: info@woodendove.com
          <br />
          phone: 01229 451786
          <br />
        </div>
        <i>link to instagram here</i>
        <i>link to facebook here</i>
      </div>
    )
  }
}

export default Footer

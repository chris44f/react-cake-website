import React, { Component } from 'react';
import './index.css';
import SlideshowImage1 from '../../assets/edenhall-wedding.jpg'

class Slideshow extends Component {
  render(){
    return(
      <div className="slideshow">
        <img src={SlideshowImage1} id="homepage_image" />
      </div>
    )
  }
}

export default Slideshow

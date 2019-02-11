import React, { Component } from 'react';
import Footer from '../../components/footer'
import Navigation from '../../components/navigation'
import Slideshow from '../../components/slideshow'

class Main extends Component {

  render(){
    return(
      <div>
        <Navigation />
        <Slideshow />
        <Footer />
      </div>
    )
  }
}

export default Main;

import React, { Component } from 'react';
import './index.css';
import Image1 from '../../assets/200mmh_highbarnshoot-6.jpg'
import Image2 from '../../assets/200mmh_patisserie-tower.jpg'
import Image3 from '../../assets/200mmh_buttercream-lakes.jpg'
import Image4 from '../../assets/200mmh_tea-party.jpg'
import Image5 from '../../assets/200mmh_buttercream-wedding-lake-district.jpg'
import Image6 from '../../assets/200mmh_croquembouche.jpg'
import Image7 from '../../assets/200mmh_skimmed-country.jpg'
import Image8 from '../../assets/200mmh_SE-wed-web-760.jpg'
import Image9 from '../../assets/200mmh_scone-tower.jpg'

class Slideshow extends Component {

  state = {
    scrollView: 1
  }

  handlePrev = () => {
    if (this.state.scrollView>1) {
      this.setState({scrollView: this.state.scrollView-=1})
      let prevImage = document.getElementById(this.state.scrollView.toString())
      prevImage.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
    } else {
      this.setState({scrollView: 9})
      let prevImage = document.getElementById('9')
      prevImage.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
    }
  }

  handleNext = () => {
    if (this.state.scrollView<8) {
      this.setState({scrollView: this.state.scrollView+=1})
      let nextImage = document.getElementById(this.state.scrollView.toString())
      nextImage.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
    } else {
      this.setState({scrollView: 1})
      let nextImage = document.getElementById('1')
      nextImage.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'})
    }
  }

  render(){
    return(
      <div className="carousel-wrapper">
      <button className="button-prev" onClick={()=>this.handlePrev()}>Prev</button>
        <ul className="slideshow">
          <li><img id='1' src={Image1}/></li>
          <li><img id='2' src={Image2}/></li>
          <li><img id='3' src={Image3}/></li>
          <li><img id='4' src={Image4}/></li>
          <li><img id='5' src={Image5}/></li>
          <li><img id='6' src={Image6}/></li>
          <li><img id='7' src={Image7}/></li>
          <li><img id='8' src={Image8}/></li>
          <li><img id='9' src={Image9}/></li>
        </ul>
        <button className="button-next" onClick={()=>this.handleNext()}>Next</button>
      </div>
    )
  }
}

export default Slideshow

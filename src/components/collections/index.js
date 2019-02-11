import React, { Component } from 'react';
import './index.css'

class Collections extends Component {
  render(){
    console.log(this.props)
    return(
      <div className="collection">
        <img src={this.props.src} />
        <p>{this.props.title}</p>
        <button>{this.props.many ? "View Cakes" : "View More"}</button>
      </div>
    )
  }
}

export default Collections

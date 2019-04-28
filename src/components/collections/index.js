import React, { Component } from 'react';
import './index.css'

class Collections extends Component {
  render(){
    return(
      <div className="collection">
        <img src={this.props.src} />
        <h2>{this.props.title}</h2>
        <button>{this.props.many ? "View Cakes" : "View More"}</button>
      </div>
    )
  }
}

export default Collections

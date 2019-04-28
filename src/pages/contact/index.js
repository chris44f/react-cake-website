import React, { Component } from 'react'
import './index.css'

class Contact extends Component {

  state = {
    fullName: "",
    emailAddress: "",
  }

  handleMessageChange = (e) => {
    this.setState({ message: e })
  }

  handleNameChange = (e) => {
    this.setState({ fullName: e })
  }

  handleEmailChange = (e) => {
    this.setState({ emailAddress: e })
  }

  render(){
    return(
      <div className="contact-wrapper">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>We'd love for you to get in touch to discuss the requirements for
          your wedding day so that we can provide a cake that's just right for you.
          Feel free to either use the form below or contact us via the details at
          the bottom of the page.</p>
        </div>
        <form className="cake-form">
          Full Name:
          <br />
          <input
            type="text"
            value={this.state.fullName}
            onChange={(e)=>this.handleNameChange(e.target.value)}/>
          <br />
          <br />
          <br />
          Email Address:
          <br />
          <br />
          <input
            type="email"
            value={this.state.emailAddress}
            onChange={(e)=>this.handleEmailChange(e.target.value)}/>
          <br />
          <br />
          <br />
          Message:
          <br />
          <br />
          <input
            type="textarea"
            id="message"
            value={this.state.message}
            placeholder={`e.g. cakes you like the look of, colours, flavours, ideas! Please include date of wedding (approximate if unknown).`}
            onChange={(e)=>this.handleMessageChange(e.target.value)}
          />
          <br />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Contact

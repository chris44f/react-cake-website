import React, { Component } from 'react'
import './index.css'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

class Main extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <div className="textBody">
          <h1>Contact Us</h1>
          <p>`We'd love for you to get in touch to discuss the requirements for
          your wedding day so that we can provide a cake that's just right for you.
          Feel free to either use the form below or contact us via the details at
          the bottom of the page.`</p>
        </div>
        <form>
          Name *
          <input type="text" />
          First name
          <input type="text" />
          Last name
          <br />
          <br />
          Email Address *
          <input type="email" />
          Message *
          <input type="text" placeholder={`e.g. cakes you like the look of, colours,
          flavours, ideas! Please include date of wedding (approximate if unknown).`}
           />
          <button>Submit</button>
          <hr />
        </form>
        <Footer />
      </div>
    )
  }
}

export default Main

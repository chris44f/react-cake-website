import React, { Component } from 'react';
import Footer from '../../components/footer'
import Navigation from '../../components/navigation'
import './index.css'
import WelcomeImg from '../../assets/welcome.jpg'
import Quote from '../../components/quote'
import EbonyImg from '../../assets/ebony.jpg'

const customerQuotes = [
  {
    quote: "This is a sample quote",
    source: "Sample Customer",
    id: "customerQuote"
  },
  {
    quote: `"What do we want to offer our clients? I think to us it's about offering
     unique cakes. Instead of traditional iced cakes, these are fresh and flavourful
      creations. From the moment people first walk in to the venue, to when they
      take the final bite, we want to provide a cake that radiates the beautiful
      celebration of your big day. That's our aim."`,
    source: "Ebony, Head Cake Designer",
    id: "ownerQuoteWelcome"
  }]

class Main extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <div className="textBody">
          <Quote
            id={customerQuotes[0].id}
            source={customerQuotes[0].source}
            quote={customerQuotes[0].quote}
          />
          <h1>Welcome</h1>
          <p>We are The Wooden Dove Cake Company - here to offer beautiful,
            fresh wedding cakes to the North West of England. Whether it’s modern
            or classic, white or colourful, buttercream or patisserie towers you’re
            after, we’ve got it covered. Check out our Cakes Collection and give us
             a call.
          </p>
          <hr />
          <div id="aboutus">
            <img src={WelcomeImg} id="welcome_img" />
            <h2>About Us</h2>
            <p>
              Following a dedicated pastry chef career between London and Lake
              District hotels, modern patisseries and restaurants, Ebony Jemima's
              sheer passion for creating beauty in food took hold. Quickly
              discovering where her heart lay, Ebony moved to permanently specialise
              in wedding cakes, and well, the rest is history!
              <br />
              <br />
              From this life in all things sweet, she and her husband established
              The Wooden Dove Cake Company to provide brides throughout the North
              West with uniquely spectacular cakes. To sum the collections up?
              They're vibrant, visually stunning cakes that taste fantastic and
              give the wow factor as the centrepiece for your wedding.
              <br />
              <br />
              Beginning with your own tailored tasting, we'll discuss exactly what
              you want, matching the colours, themes, and style of your wedding
              with close attention to detail. You decide, we create. It's as simple
              as that.
            </p>
          </div>
          <hr />
          <span className="quoteImageR">
            <Quote
              id={customerQuotes[1].id}
              source={customerQuotes[1].source}
              quote={customerQuotes[1].quote}
            />
            <img src={EbonyImg} id="welcome_owner_img" />
          </span>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main

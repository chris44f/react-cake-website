import React, { Component } from 'react';
import Footer from '../../components/footer'
import Navigation from '../../components/navigation'
import Collections from '../../components/collections'
import CroqImg from '../../assets/croq.jpg'
import TeaPartyImg from '../../assets/teaparty.jpg'
import BcreamImg from '../../assets/skimmed.jpg'
import MacaronImg from '../../assets/macaron.jpg'
import './index.css'

const collections = [
  {
    src: CroqImg,
    title: "Le Croquembouche",
    many: false,
  },
  {
    src: BcreamImg,
    title: "Buttercream Cakes",
    many: true,
  },
  {
    src: TeaPartyImg,
    title: "Tea Party Tower",
    many: false,
  },
  {
    src: MacaronImg,
    title: "Macaron Tower",
    many: false,
  },
]

class Main extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <h1>Cake Collections</h1>
        {collections.map((collection)=>(
          <Collections
            src={collection.src}
            title={collection.title}
            many={collection.many}
          />
        ))}
        <div>
          <img src="" id="" />
          <p>The Wooden Dove Cake Company also offers an assortment of favours
            that make the perfect sweet treat for your guests, handmade by our
            trained pastry chef and confectioner. Please enquire for more information.
          </p>
          <img src="" id="" />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main

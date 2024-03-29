import React from 'react'
import 'bulma'
import ginandpickles from '../../images/ginandpickles.jpg'

const sectionStyle = {
  width: '100%',
  height: '1180px',
  backgroundImage: `linear-gradient(rgba(0,0,0, 0.35), rgba(0,0,0, 0.5)), url(${ginandpickles})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  position: 'relative',
  top: '0px'

}

class Main extends React.Component {
  render(){
    return (
      <section className="hero is-medium is-fixed-bottom full-width-img2" id="about" style={ sectionStyle }>
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle left">
              About Us
            </h2>
            <div className="about-p">
              <p>
                Here at Travelling Toucan we LOVE adventures.
              </p>
              <br/>
              <p>
                Whether they are your epic global travels or the next adventure in your life story, like a new baby or new home.
              </p>
              <br/>
              <p>
                We can provide you with a personalised beautifully crafted, timeless pieces to suit any setting. Desktop Signposts, Garden signs and wooden, metal and canvas wall art.
              </p>
              <br/>
              <p>
                For the Adventures already taken or Adventures yet to come - Where will your Travelling Toucan piece take you?
              </p>
              <div id="bottom-1">
              </div>
            </div>
            <a href="https://www.etsy.com/uk/shop/TravellingToucan">
              <h2 className="subtitle left bottom">
                Order Now
              </h2>
            </a>
            <h2 className="subtitle arrow-2">
              <a href="#top">
              △
              </a>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Main

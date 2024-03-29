import React from 'react'
import 'bulma'
import img9349 from '../../images/img9349.jpg'
import img9356 from '../../images/img9356.jpg'
import img9339 from '../../images/img9339.jpeg'


class Gallery extends React.Component {
  render(){
    return (
      <div className="tile is-parent" id="gallery">
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src={img9356} alt="Australia Hawaii and Estonia signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src={img9339} alt="gin and pickles bar signpost"/>
          </figure>
        </article>
        <article className="tile is-child notification is-white">
          <p className="title"></p>
          <p className="subtitle"></p>
          <figure className="image is-4by5">
            <img src={img9349} alt="Borneo Glastonbury Signpost"/>
          </figure>
        </article>
      </div>
    )
  }
}

export default Gallery

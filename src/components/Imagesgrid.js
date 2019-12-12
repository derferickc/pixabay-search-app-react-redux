import React, { Component } from "react"
import { FaExternalLinkAlt } from 'react-icons/fa'
import Tile from './Tile'
 
class Imagesgrid extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        {this.props.images.map((image) => (
          <Tile
            key={image.id}
            id={image.id}
            likes={image.likes}
            favorites={image.favorites}
            previewURL={image.previewURL}
            tags={image.tags}
            savePicture={this.props.savePicture}
            />
        ))}
      </div>
    )
  }
}
 
export default Imagesgrid;
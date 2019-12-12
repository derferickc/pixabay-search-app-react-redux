import React, { Component } from "react"
import Tile from './Tile'
 
class Imagesgrid extends Component {

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
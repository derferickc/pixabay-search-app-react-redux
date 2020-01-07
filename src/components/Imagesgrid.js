import React, { Component } from "react"
import Tile from './Tile'
 
class ImagesGrid extends Component {

  render() {
    return (
      <div>
        {this.props.images.map((image) => (
          <Tile
            key={image.id}
            id={image.id}
            likes={image.likes}
            favorites={image.favorites}
            previewURL={image.previewURL}
            tags={image.tags}
            />
        ))}
      </div>
    )
  }
}
 
export default ImagesGrid;
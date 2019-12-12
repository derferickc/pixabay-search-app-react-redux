import React, { Component } from "react"
import { FaExternalLinkAlt } from 'react-icons/fa'
import Tile from './Tile'
 
class Imagesgrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saved: []
    }

    this.handleSaveImage = this.handleSaveImage.bind(this)
  }

  handleSaveImage(id, previewURL) {
    console.log(id + ' ' + previewURL)

    this.setState((currentState) => {
      return {
        saved: currentState.saved.concat([{
          id,
          previewURL
        }])
      }
    })
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
            onSaveImage={this.handleSaveImage.bind(this)}
            />
        ))}
      </div>
    )
  }
}
 
export default Imagesgrid;
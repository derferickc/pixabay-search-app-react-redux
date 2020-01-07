import React, { Component } from "react"
import { FaStar, FaThumbsUp } from 'react-icons/fa'
import { saveImage } from '../actions/saveActions'
import { removeImage } from '../actions/saveActions'
import { connect } from 'react-redux'
 
class Tile extends Component {

  constructor(props) {
    super(props)

    this.handleSaveImage = this.handleSaveImage.bind(this)
  }

  handleSaveImage(id, previewURL) {
    this.props.saveImage(id, previewURL)
  }

  handleRemoveImage(id) {
    this.props.removeImage(id)
  }

  render() {
    let tagsArr = this.props.tags.split(', ')
    let indexOfID = this.props.savedImages.findIndex((saved) => saved.id === this.props.id)

    return (
      <div className='tile-wrapper'>
        <div className="tile-image col-7">
          <div className="tile-inner">
            <img src={this.props.previewURL} alt={this.props.id}/>
            {/* if the id of the tile doesn't exist in saved items array, show pink, else show orange  */}
            {indexOfID === -1
              ? <div className="overlay-pink" onClick={() => this.handleSaveImage(this.props.id, this.props.previewURL)}>Save</div>
              : <div className="overlay-orange" onClick={() => this.handleRemoveImage(this.props.id)}>Saved</div>}
          </div>
        </div>

        <div className="col-5 tile-tags-likes text-left">
          <div className="tile-tags">
            {tagsArr.map((tag) => (
              <span className="tag-label" key={tag}>{tag}</span>
            ))}
          </div>

          <div className="tile-likes">
            <span className='tile-like'>
              <strong>{this.props.likes}</strong>
              <FaThumbsUp color='#000000' size={15}/>
            </span>

            <span className='tile-favorites'>
              <strong>{this.props.favorites}</strong>
              <FaStar color='#000000' size={15}/>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  savedImages: state.saved,
});

export default connect(mapStateToProps, { saveImage, removeImage })(Tile);
import React, { Component } from "react"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { fetchSaved } from '../actions/saveActions'
import { connect } from 'react-redux'
 
class Saved extends Component {

  render() {
    const { savedImages } = this.props

    return (
      <React.Fragment>
        <h4>Saved</h4>

        {!savedImages.length
          ? <span>No saved images</span>
          : null
        }

        {savedImages.map((image) => (
          <div className="external-link" key={image.id}>
            <a href={image.previewURL}>
              <span className="saved-id-wrapper">#{image.id}</span>
              <FaExternalLinkAlt color='#6610f2' size={15}/>
            </a>
          </div>
        ))} 
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  savedImages: state.saved
});

export default connect(mapStateToProps, { fetchSaved })(Saved);
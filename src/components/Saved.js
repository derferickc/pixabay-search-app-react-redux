import React, { Component } from "react"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { fetchSaved } from '../actions/saveActions'
import { connect } from 'react-redux'
 
class Saved extends Component {

  componentDidMount() {
    this.props.fetchSaved();
  }

  render() {
    return (
      <React.Fragment>
        <h4>Saved</h4>

        {/* {props.savedImages.length <= 0 &&
          <span>No saved images</span>
        } */}

        {/* {this.props.savedImages.map((image) => (
          <div className="external-link" key={image.id}>
            <a href={image.previewURL}>
              <span className="saved-id-wrapper">#{image.id}</span>
              <FaExternalLinkAlt color='#6610f2' size={15}/>
            </a>
          </div>
        ))} */}
        
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  savedImages: state.saved.savedImages,
});

export default connect(mapStateToProps, { fetchSaved })(Saved);
import React, { Component } from "react"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { connect } from 'react-redux'
 
class Saved extends Component {

  render() {
    const { saved } = this.props

    return (
      <React.Fragment>
        <h4>Saved</h4>

        {!saved.length
          ? <span>No saved images</span>
          : null
        }

        {saved.map((image) => (
          <div className="external-link" key={image.id}>
            <a href={image.largeImageURL} target='_blank' rel='noopener noreferrer'>
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
  saved: state.saved
});

export default connect(mapStateToProps)(Saved);
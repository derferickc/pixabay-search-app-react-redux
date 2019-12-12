import React, { Component } from "react"
import { FaExternalLinkAlt } from 'react-icons/fa'
 
class Saved extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <h4>Saved</h4>

        <p className="external-link">
          <a href="" >
            <span>{this.state.saved}</span><FaExternalLinkAlt color='#6610f2' size={15}/>
          </a>
        </p>
      </React.Fragment>
    );
  }
}
 
export default Saved;
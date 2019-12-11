import React, { Component } from "react"
import Search from './Search'
import Saved from './Saved'
import '../App.scss'
 
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className="app-wrapper container">
        <div className="row">
          <div className="col-8 left-wrapper text-center">
            <Search />
          </div>
          <div className="col-4 right-wrapper text-center">
            <Saved />
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
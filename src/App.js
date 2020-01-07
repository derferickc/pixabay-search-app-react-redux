import React, { Component } from "react"
import Main from './components/Main'
import './App.scss'
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
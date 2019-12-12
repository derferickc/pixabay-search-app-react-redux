import React, { Component } from "react"
import Saved from './Saved'
import Imagesgrid from './Imagesgrid'
import '../App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      amount: 10,
      apiUrl: 'https://pixabay.com/api',
      apiKey: '13136421-266c28a6d61717bc2e4e6a83e',
      imageData: '',
      error: null,
      filter: '',
      saved: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    let searchTextAdjust = this.state.searchText.split(' ').join('+').toLowerCase();

    fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${searchTextAdjust}&image_type=photo&per_page=${this.state.amount}&safesearch=true&category=${this.state.filter}`)
      .then( response => response.json())
      .then(
        // handle the result
        (result) => {
          this.setState({
            imageData : result
          });
        },
        // Handle error 
        (error) => {
          this.setState({
            error: ''
          })
        },
      )
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  handleFilterChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { imageData, error } = this.state
    let categories = ['fashion', 'nature', 'backgrounds', 'science', 'education', 'people', 'feelings', 'religion', 'health', 'places', 'animals', 'industry', 'food', 'computer', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']

    return (
      <div className="app-wrapper container">
        <div className="row">
          <div className="col-8 left-wrapper text-center">
            <form className='keyword-form' onSubmit={this.handleSubmit}>
              <input
                className='form-input col-12'
                type='text'
                name='searchText'
                placeholder='Keyword...'
                autoComplete='off'
                value={this.state.searchText}
                onChange={this.handleChange}
              />

              <div className="select-filter-wrapper">
                <label className="col-12">
                  <select value={this.state.filter} onChange={this.handleFilterChange} className="select-wrapper col-12">
                    <option className="option-placeholder" value="" defaultValue disabled>Category...</option>
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                className='submit-button'
                type='submit'
                disabled={!this.state.searchText}>
                Search
              </button>

              {error && <p className='center-text error'>{error}</p>}

              {imageData &&
                <Imagesgrid
                  images={imageData.hits}
                />
              }
          </form>
          </div>
          <div className="col-4 right-wrapper text-center">
            <Saved savedpictures={this.state.saved}/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
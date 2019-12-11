import React, { Component } from "react"
import Tile from './Tile'
 
function ImagesGrid ({ images }) {
  return (
    <div className="">
      {images.map((image) => (
        <Tile
          key={image.id}
          id={image.id}
          likes={image.likes}
          favorites={image.favorites}
          previewURL={image.previewURL}
          tags={image.tags}/>
      ))}
    </div>
  )
}

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      amount: 10,
      apiUrl: 'https://pixabay.com/api',
      apiKey: '13136421-266c28a6d61717bc2e4e6a83e',
      imageData: '',
      error: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    let searchTextAdjust = this.state.searchText.split(' ').join('+').toLowerCase();

    fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${searchTextAdjust}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
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

    this.setState({
      searchText: ''
    })
  }

  handleChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    const { imageData, error } = this.state

    return (
      <React.Fragment>
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
            <button
              className='submit-button'
              type='submit'
              disabled={!this.state.searchText}>
              Search
            </button>

            {error && <p className='center-text error'>{error}</p>}

            {imageData && <ImagesGrid images={imageData.hits} />}
            
            {/* <div>{JSON.stringify(imageData.hits)}</div> */}

            <div className='saved-searches'></div>
        </form>
      </React.Fragment>
    );
  }
}
 
export default Search;
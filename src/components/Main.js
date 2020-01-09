import React, { Component } from "react"
import Saved from './Saved'
import Imagesgrid from './Imagesgrid'
import { fetchImages } from '../actions/searchActions'
import { connect } from 'react-redux'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      filter: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    let inputRegex = this.state.searchText.split(' ').join('+').toLowerCase();

    const post = {
      searchText: inputRegex,
      filter: this.state.filter
    }

    this.props.fetchImages(post);
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

              {this.props.errors &&
                <p className='center-text error'>{this.props.errors}</p>
              }

              {this.props.imageData &&
                <Imagesgrid images={this.props.imageData.hits}
                />
              }
            </form>
          </div>

          <div className="col-4 right-wrapper text-left">
            <Saved />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  imageData: state.search.imageData,
  errors: state.search.errors
});

export default connect(mapStateToProps, { fetchImages })(Main);
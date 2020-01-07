import { FETCH_IMAGES } from './types';

export const fetchImages = (posts) => dispatch => {
	
	const apiUrl = 'https://pixabay.com/api'
    const apiKey = '13136421-266c28a6d61717bc2e4e6a83e'
    const searchAmount = 10

    fetch(`${apiUrl}/?key=${apiKey}&q=${posts.searchText}&image_type=photo&per_page=${searchAmount}&safesearch=true&category=${posts.filter}`)
      .then(response => response.json())
      // Handle the result
      .then(posts => dispatch({
			type: FETCH_IMAGES,
			payload: posts
		}),
        // Handle error 
        (error) => {
          console.log('Error retrieving data from API')
        },
      )
}
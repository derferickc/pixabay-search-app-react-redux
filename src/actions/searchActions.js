import { FETCH_IMAGES, SHOW_ERROR } from './types';

export const fetchImages = (posts) => dispatch => {

	const apiUrl = 'https://pixabay.com/api'
    const apiKey = '13136421-266c28a6d61717bc2e4e6a83e'
    const searchAmount = 10

    let fetchQuery = `${apiUrl}/?key=${apiKey}&q=${posts.searchText}&image_type=photo&per_page=${searchAmount}&safesearch=true&category=${posts.filter}`

    fetch(fetchQuery)
		.then(response => response.json())
		.then(posts => {
			// Handle error
			if(posts.hits.length === 0) {
				dispatch({
					type: SHOW_ERROR,
					payload: "No matching images could be found"
				})
			} else {
			// Handle the result
				dispatch({
					type: FETCH_IMAGES,
					payload: posts
				})
			}
			
		}
      )
}
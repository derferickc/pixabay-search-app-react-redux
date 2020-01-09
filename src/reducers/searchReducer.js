import { FETCH_IMAGES, SHOW_ERROR } from '../actions/types';

const initialState = {
	imageData: '',
	errors: '',
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_IMAGES:
			return {
				...state,
				imageData: action.payload
			}
		case SHOW_ERROR:
			return {
				imageData: '',
				errors: action.payload
			}
		default: 
			return state;
	}
}
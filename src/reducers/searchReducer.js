import { FETCH_IMAGES } from '../actions/types';

const initialState = {
	imageData: ''
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_IMAGES:
			return {
				...state,
				imageData: action.payload
			}
		default: 
			return state;
	}
}
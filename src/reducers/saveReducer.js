import { SAVE_IMAGE, REMOVE_IMAGE, FETCH_SAVED } from '../actions/types';

const initialState = [{id: 801826, previewURL: "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_150.jpg"}]

export default function(state = initialState, action) {
	switch (action.type) {
		case SAVE_IMAGE:
			return [...state, action.payload]
		case REMOVE_IMAGE:
			return [...state, action.payload]
		case FETCH_SAVED:
			console.log(state + " save reducer")
			return state
		default: 
			return state;
	}
}
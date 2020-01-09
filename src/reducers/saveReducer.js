import { SAVE_IMAGE, REMOVE_IMAGE, FETCH_SAVED } from '../actions/types';

const initialState = []

export default function(state = initialState, action) {
	switch (action.type) {
		case SAVE_IMAGE:
			return state.concat([{
				id: action.payload.id,
				largeImageURL: action.payload.largeImageURL
			}])
		case REMOVE_IMAGE:
			return state.filter((image) => image.id !== action.payload.id)
		default: 
			return state;
	}
}
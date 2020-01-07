import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import saveReducer from './saveReducer'

export default combineReducers({
	posts: searchReducer,
	saved: saveReducer
})
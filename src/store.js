import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const loadState = () => {
	// browser settings may not allow local storage(private mode)
	try {
		const serializedState = localStorage.getItem('saved')
		// react-redux isn't expecting null, so set to undefined
		if(serializedState === null) {
			// react-redux isn't expecting null, so set to undefined
			return undefined
		}
		// return the serialized state parsed as JSON
		return JSON.parse(serializedState)
	} catch(err) {
		console.log(err)
		return undefined
	}
}

export const saveState = (state) => {
	// browser settings may not allow local storage(private mode)
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('saved', serializedState)
	} catch(err) {
		console.log(err)
	}
}

const middleware = [thunk];

const persistedState = loadState()

const store = createStore(
	rootReducer,
	persistedState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

store.subscribe(() => {
	saveState({
		saved: store.getState().saved
	})
})

export default store;
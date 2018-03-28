import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from '../reducers';

export default function setupStore(initialState) {
    return createStore(combinedReducer, initialState, applyMiddleware(thunk));
}

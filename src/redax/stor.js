import { combineReducers, createStore, applyMiddleware } from 'redux'
import locationReducer from './reducers/locationReducer'


const reducer = combineReducers({ locationReducer })
const store = createStore(reducer)
window.store = store
export default store;
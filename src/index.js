import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import combineReducers from './Reducers/combineReducers'
const store = createStore(combineReducers,applyMiddleware(ReduxThunk))
ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('#root'))
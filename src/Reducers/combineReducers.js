import {combineReducers} from 'redux'
import store from './store'
import filterStore from './filterStore'
import cart from './cart'

export default combineReducers({
    store,
    filterStore,
    cart,
    
})
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//----------------------------------------------------------------------------------------
import cartReducer from '../reducers/cartReducer'
//----------------------------------------------------------------------------------------

import productsReducer from '../reducers/productsReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        products: productsReducer,
        cart: cartReducer
    }), applyMiddleware(thunk))
    return store
}

export default configStore
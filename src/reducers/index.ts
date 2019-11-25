import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'
import userReducer from './userReducer'
import statusReducer from './statusReducer'


export default combineReducers({
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    status: statusReducer,
})

// TODO: use this store variable to create a store.
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import {productReducer} from "./product/product.reducer"
import {cartReducer} from "./cart/cart.reducer"
import {authReducer} from "./auth/auth.reducer"
import thunk from 'redux-thunk'
const rootReducer=combineReducers(
{   auth:authReducer,
    product:productReducer,
    cart:cartReducer
});
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

// Note: Do not update/change the initial state

import {GET_CART_ITEMS_LOADING,GET_CART_ITEMS_SUCCESS,GET_CART_ITEMS_ERROR,ADD_ITEM_TO_CART_LOADING,ADD_ITEM_TO_CART_SUCCESS,ADD_ITEM_TO_CART_ERROR} from "./cart.types"

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type,payload}) => {

  switch(type){
    case ADD_ITEM_TO_CART_LOADING:{
        return {...state,addCartItem:{...state.addCartItem,loading:true}}
    }
    case ADD_ITEM_TO_CART_SUCCESS:{

      return {...state,addCartItem:{...state.addCartItem,loading:false},data:payload}
      // getTodos:{loading:false,error:false,data:[...state.getTodos.data,payLoad]}};
  }
    case ADD_ITEM_TO_CART_ERROR:{
        return {...state,addCartItem:{...state.addCartItem,error:true,loading:false}}
    } 
   case GET_CART_ITEMS_SUCCESS:{
       return {...state,getCartItems:{...state.getCartItems,loading:false},data:payload}
      }
   
   case GET_CART_ITEMS_LOADING:{
    return {...state,getCartItems:{...state.getCartItems,loading:true}}
}
   case GET_CART_ITEMS_ERROR:{
return {...state,getCartItems:{...state.getCartItems,loading:false,error:true}}
   }
   default:{
       return state;
   }
};}

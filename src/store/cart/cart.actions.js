// Cart Actions here
import {GET_CART_ITEMS_LOADING,GET_CART_ITEMS_SUCCESS,GET_CART_ITEMS_ERROR,ADD_ITEM_TO_CART_LOADING,ADD_ITEM_TO_CART_SUCCESS,ADD_ITEM_TO_CART_ERROR} from "./cart.types"

import axios from 'axios'
export const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_LOADING});
    axios.post("http://localhost:8080/cartItems",
   payload).then(res=>{
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:res.data})
    }).then(err=>dispatch({type:ADD_ITEM_TO_CART_ERROR}));
    
}



export const getData=()=>(dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING});
axios.get("http://localhost:8080/products").then(res=>{
    dispatch({type:GET_CART_ITEMS_SUCCESS,payload:res.data})
}).catch(err=>dispatch({type:GET_CART_ITEMS_ERROR}))
}


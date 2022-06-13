// Product actions here
import {GET_PRODUCTS_LOADING,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR} from "./product.types";


import axios from 'axios'
export const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    axios.post("http://localhost:9090/todos",
   payload).then(res=>{
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
    }).then(err=>dispatch({type:GET_PRODUCTS_ERROR}));
    
}



export const getData=()=>(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
axios.get("http://localhost:8080/products").then(res=>{
    dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
}).catch(err=>dispatch({type:GET_PRODUCTS_ERROR}))
}
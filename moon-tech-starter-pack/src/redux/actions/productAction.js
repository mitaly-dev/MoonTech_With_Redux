import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_NEW_PRODUCT,
  ADD_PRODUCT,
  ADD_TO_CART,
  LOAD_PRODUCT_DATA,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  TOGGLE_BRANDS,
  TOGGLE_STOCK,
} from "../actionTypes/actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};


// filter

export const toggle_brands=(data)=>{
  return {
    type:TOGGLE_BRANDS,
    payload:data
  }
}

export const toggle_stock=()=>{
  return {
    type:TOGGLE_STOCK
  }
}

// products 

export const loadProducts=(data)=>{
  return {
    type:LOAD_PRODUCT_DATA,
    payload: data
  }
}

export const addNewProduct=(data)=>{
  return {
    type:ADD_NEW_PRODUCT,
    payload:data
  }
}
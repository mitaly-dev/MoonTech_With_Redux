import {
  ADD_PRODUCT,
  ADD_TO_CART,
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
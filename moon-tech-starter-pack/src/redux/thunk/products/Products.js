import { addNewProduct, loadProducts } from "../../actions/productAction"

export const loadProductsData=()=>{
    return async (dispatch,getState)=>{
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()
        if(data.length){
            dispatch(loadProducts(data))
        }
    }
}

export const addNewProductData=(product)=>{
    return async(dispatch,getState)=>{
        const res = await fetch('http://localhost:5000/product',{
            method:'POST',
            body:JSON.stringify(product),
            headers:{
                'Content-type':'application/json'
            }
        })
       const data = await res.json()
       if(data.acknowledged){
        dispatch(addNewProduct({...product,_id:data.insertedId}))
       }
    }
}
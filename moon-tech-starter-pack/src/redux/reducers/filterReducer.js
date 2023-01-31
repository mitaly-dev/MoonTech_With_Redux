import { TOGGLE_BRANDS, TOGGLE_STOCK } from "../actionTypes/actionTypes"

const initialReducer={
    filters : {
        brands:[],
        stock:false
    }
}

export const filterReducer=(state=initialReducer,action)=>{
    switch(action.type){
        case TOGGLE_BRANDS:
            if(!state.filters.brands.includes(action.payload)){
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        brands: [...state.filters.brands,action.payload]
                    }
                }
            }
            return{
                ...state,
                filters:{
                    ...state.filters,
                    brands: state.filters.brands.filter(brand=>brand!==action.payload)
                }
            }
        case TOGGLE_STOCK:
            return{
                ...state,
                filters:{
                    ...state.filters,
                    stock:!state.filters.stock
                }
            }
        default:
            return state
    }

}
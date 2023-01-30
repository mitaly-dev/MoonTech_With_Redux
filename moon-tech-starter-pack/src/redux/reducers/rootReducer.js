import { filterReducer } from "./filterReducer";
import productReducer from "./productReducer";
import {combineReducers} from "redux"


export const rootReducer = combineReducers({
    product : productReducer,
    filter : filterReducer
})
import  {errorReducer}  from "./ErrorReducer";
import {reducerProduct} from "./reducer";
import  {reducerUser}  from "./reducerUser";
import { combineReducers } from "redux";


export const comReducer =combineReducers({
    errorReducer,reducerProduct,reducerUser
})
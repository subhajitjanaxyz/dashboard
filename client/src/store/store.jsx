import {configureStore} from "@reduxjs/toolkit"
import { api } from "./apirtk"
import  alldataisher  from "./alldata"

export const store =configureStore({
    reducer:{
         [api.reducerPath]:api.reducer,
         dbdata: alldataisher,
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(api.middleware)
   
})
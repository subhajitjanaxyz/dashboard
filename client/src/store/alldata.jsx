import { createSlice } from "@reduxjs/toolkit";
let initialState=null


export const alldataisher=createSlice({
    name:"dataget",
    initialState,
    reducers:{
        datainsert:(state,action)=>{
        return   state=action.payload
        }
    }
})

export default alldataisher.reducer;
export const {datainsert}=alldataisher.actions
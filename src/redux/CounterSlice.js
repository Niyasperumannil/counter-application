import { createSlice } from "@reduxjs/toolkit";



export const couterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        reset : (state)=>{
            state.value=0
        },
        changeRange:(state , action)=>{
            state.value += action.payload
        }
    }
})
//actions need to a component
export const {increment,decrement,reset,changeRange} =couterSlice.actions
// reducer are need to update state
export default couterSlice.reducer
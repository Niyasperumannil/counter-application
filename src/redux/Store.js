import { configureStore } from "@reduxjs/toolkit";
import  couterSlice from "./CounterSlice";



export const store = configureStore({
    reducer:{
        counter:couterSlice

    }
    
})
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    counter:0
}
export const counterSlice=createSlice({name:"counter",
initialState,
    reducers:{
        //action creators
        increment:(state)=>{
state.counter++;
        },
        decrement:(state)=>{
state.counter--;
        },
        increasebyamount:(state,action)=>{

        }
    }
})

export const counterreducer=counterSlice.reducer;
export const{increment,decrement,increasebyamount}=counterSlice.actions
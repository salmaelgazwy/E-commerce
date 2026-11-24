import { GetAllProducts } from "@/services/product.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productaction=createAsyncThunk("product/GetAllProducts",async()=>{
    const response=await GetAllProducts();
    return response;

})
const initialState={products:[]}
export const productslice=createSlice({
    name:"product",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(productaction.pending,(state,action)=>{
console.log("pending")
        })
        builder.addCase(productaction.fulfilled,()=>{
            console.log("fullfilled")
        })
        builder.addCase(productaction.rejected,()=>{
            console.log()
        })
    }
})
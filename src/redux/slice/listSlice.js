import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

let initialState = {
    list : [],
}

export const getProducts = createAsyncThunk('List/fetchAll', async () => {
    try {
        const response = await axios.get(`http://localhost:5000/products`);
        return response.data;
    } catch(error) {
        console.error(error)
    }
})

const listSlice = createSlice({
    name: "List",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getProducts.pending, (state, action)=>{
            // state.status = "loading"
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.list = action.payload;
        })
        .addCase(getProducts.rejected, (state, action)=>{
            // state.status = "failed"
        })
    }
})

export default listSlice.reducer

export const {getList} = listSlice.actions
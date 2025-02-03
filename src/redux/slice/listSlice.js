import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

let initialState = {
    list : [],
    status : 'all'
}


export const getNewslist = createAsyncThunk('List/fetchAll', async (name) => {
    try {
        const filter = name === "all" ? '' : `&category=${name}`;
        const response = await axios.get(`https://newsdata.io/api/1/latest?country=kr${filter}&apikey=pub_64515215181728cbe7be384f9a473ecddce17`);
        return response.data.results;
    } catch(error) {
        console.error(error)
    }
})

const listSlice = createSlice({
    name: "List",
    initialState,
    reducers : {
        changeStatus(state, action) {
            state.status = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getNewslist.pending, (state, action)=>{
            // state.status = "loading"
        })
        .addCase(getNewslist.fulfilled, (state, action)=>{
            state.list = action.payload;
        })
        .addCase(getNewslist.rejected, (state, action)=>{
            // state.status = "failed"
        })
    }
})

export default listSlice.reducer

export const {changeStatus} = listSlice.actions
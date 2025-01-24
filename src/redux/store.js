import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slice/listSlice"

const store = configureStore({
    reducer: {
        List : listSlice
    }
})

export default store
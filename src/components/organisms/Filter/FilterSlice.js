import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filterSlice",
    initialState: {
        keyword: "",
        minPrice: 0,
        maxPrice: 0
    },
    reducers: {
        updateKeyword: (state, action) => {
            state.keyword = action.payload
        },
        updateMinPrice: (state, action) => {
            state.minPrice = action.payload
        },
        updateMaxPrice: (state, action) => {
            state.maxPrice = action.payload
        }
    }
})

export const { updateKeyword, updateMinPrice, updateMaxPrice } = filterSlice.actions

export default filterSlice.reducer